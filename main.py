#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import json

import model


def as_dict(book):
    return {
            'id': book.key.id(),
            'title': book.title,
            'author': book.author,
            'description': book.description,
            'cover': book.cover,
            'price': book.price,
            'comments': book.comments}


def as_dict_comment(comment):
    return {
            'id': comment.key.id(),
            'title': comment.title,
            'author': comment.author,
            'text': comment.text
    }


class JsonHandler(webapp2.RequestHandler):
    #def get(self):
    #    self.response.write('Hello world!')

    def write_json(self, res):
        self.response.write(json.dumps(res))


class BookREST(JsonHandler):
    def get(self):
        library = model.get_all_books()
        res = [as_dict(book) for book in library]
        self.write_json(res)

    def post(self):
        res = json.loads(self.request.body)
        book = model.insert_book(res['id'], res['title'], res['author'], res['description'], res['cover'], res['price'], res['comments'])
        res = as_dict(book)
        self.write_json(res)

    def delete(self, id):
        model.delete_book(int(id));

    def put(self, id):
        res = json.loads(self.request.body)
        book = model.update_book(res['id'], res['title'], res['author'], res['description'], res['cover'], res['price'])
        res = as_dict(book)
        self.write_json(res)


class CommentREST(JsonHandler):
    def post(self, id):
        res = json.loads(self.request.body)
        comment = model.comment_book(res['id'], id, res['title'], res['author'], res['text'])
        res = as_dict_comment(comment)
        self.write_json(res)


class BookGetId(JsonHandler):
    def get(self, id):
        book = model.get_book_by_id(int(id))
        res = as_dict(book)
        self.write_json(res)


app = webapp2.WSGIApplication([
    ('/api/book', BookREST),
    (r'/api/book/(?P<id>[0-9]+)$',BookREST),
    (r'/api/bookId/(.*)',BookGetId),
    (r'/api/book/(?P<id>[0-9]+)/comment$',CommentREST)
], debug=True)
