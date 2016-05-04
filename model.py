from google.appengine.ext import ndb


class Comment (ndb.Model):
    author = ndb.StringProperty()
    title = ndb.StringProperty()
    text = ndb.StringProperty()


class Book (ndb.Model):
    title = ndb.StringProperty()
    author = ndb.StringProperty()
    description = ndb.StringProperty()
    cover = ndb.StringProperty()
    price = ndb.FloatProperty()
    comments = ndb.StructuredProperty(Comment, repeated=True)


def get_all_books():
    return Book.query()


def get_book_by_id(id):
    key = ndb.Key(Book, id)
    return key.get()


def insert_book(id, title, author, description, cover, price, comments):
    book = Book(id=id, title=title, author=author, description=description, cover= cover, price=price, comments=comments)
    book.put()
    return book


def update_book(id, title, author, description, cover, price):
    book = Book(id=id, title=title, author=author, description=description, cover=cover, price=price)
    book.put()
    return book


def delete_book(id):
    key = ndb.Key(Book, id)
    key.delete()


def comment_book(id, bookId, title, author, text):
    comment = Comment(id=id, title=title, author=author, text=text)
    key = ndb.Key(Book, bookId)
    book = key.get()
    book.comments.apppend(comment)

