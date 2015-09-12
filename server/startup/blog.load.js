Meteor.startup(function() {
  if(Blog.find().count() === 0) {
    var blog = [
      {
        'name': 'blog 1'
      },
      {
        'name': 'blog 2'
      }
    ];
    blog.forEach(function(blog) {
      Blog.insert(blog);
    });
  }
});