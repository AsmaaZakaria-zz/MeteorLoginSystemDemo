// here we replace the old form by our new form
if(Meteor.isClient){
  Template["override-atPwdFormBtn"].replaces("atPwdFormBtn");
  Template["override-atTitle"].replaces("atTitle");
  Template["override-atPwdForm"].replaces("atPwdForm");
  Template["override-atTextInput"].replaces("atTextInput");
  Template["override-atSignupLink"].replaces("atSignupLink");
  Template["override-atError"].replaces("atError");
  Template["override-atSigninLink"].replaces("atSigninLink");
}
