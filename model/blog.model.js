Blog = new Mongo.Collection('blog');

Blog.allow({
  insert: function(userId, blog) {
    return userId;
  },
  update: function(userId, blog, fields, modifier) {
    return userId;
  },
  remove: function(userId, blog) {
    return userId;
  }
});