Meteor.startup(() => {
  if (Meteor.isDevelopment) {
    console.log('Development app loaded');
  }
});
