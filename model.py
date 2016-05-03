from google.appengine.ext import ndb


class Book (ndb.Model):
    title = ndb.StringProperty()
    author = ndb.StringProperty()
    description = ndb.StringProperty()
    cover = ndb.StringProperty()
    price = ndb.FloatProperty()
    comments = ndb.StringProperty()


def get_all_books():
    return Book.query()


def insert_book(id, title, author, description, cover, price):
    book = Book(id=id, title=title, author=author, description=description, cover= cover, price=price)
    book.put()
    return book


def update_book(id, title, author, description, cover, price):
    book = Book(id=id, title=title, author=author, description=description, cover=cover, price=price)
    book.put()
    return book


def delete_book(id):
    key = ndb.Key(Book, id)
    key.delete()