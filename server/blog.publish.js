'use strict'

Meteor.publish('blog', function() {
  return Blog.find({})
})
// Meteor.publish('blog', function(options, searchString) {
//   if(!searchString) {
//     searchString = '';
//   }
//   Counts.publish(this, 'numberOfBlog', Blog.find({
//     'name': {
//       '$regex': '.*' + searchString || '' + '.*',
//       '$options': 'i'
//     }
//   }), {noReady: true});
//   return Blog.find({
//     'name': {
//       '$regex': '.*' + searchString || '' + '.*',
//       '$options': 'i'
//     }
//   }, options);
// });
