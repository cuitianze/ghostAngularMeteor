Blogs = new Mongo.Collection('blogs');

Blogs.allow({
  insert: function(userId, blog) {
    return true;
  },
  update: function(userId, blog, fields, modifier) {
    return true;
  },
  remove: function(userId, blog) {
    return true;
  }
});