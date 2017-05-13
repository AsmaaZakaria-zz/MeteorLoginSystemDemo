Template.body.events({
  "click .logout": function(){
    Meteor.logout();
    console.log("Logged out successfully ... !!!");
  }
})
