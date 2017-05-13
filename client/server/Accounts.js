
var postSignUp = function(userId, info){
    console.log("userID -->", userId);
    console.log("Info -->", info);
    Roles.addUsersToRoles(userId, ["normal-user", info.profile.Profession]);
}

AccountsTemplates.configure({
  postSignUpHook: postSignUp,
})
