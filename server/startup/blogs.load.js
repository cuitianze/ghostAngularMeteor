Meteor.startup(function() {
  if(Blogs.find().count() === 0) {
    var blogs = [
      {
        'name': 'blog 1'
      },
      {
        'name': 'blog 2'
      }
    ];
    blogs.forEach(function(blog) {
      Blogs.insert(blog);
    });
  }
});