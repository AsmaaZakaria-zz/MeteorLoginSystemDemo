
if(Meteor.isClient){

  /*
    add custom configuration to ur form
  */

  AccountsTemplates.configure({
    confirmPassword: false, //it won't appear confirmPassword field in the form
  })


/////////////////////////////////////////////////////////

  /*
    add custom fields to the custom form
    this function takes an array of fields
    every field must be in a block
  */
  AccountsTemplates.addFields([
    {
      _id: "firstName",
      type: "text",
      displayName: "First Name"
    },
    {
      _id: "profession",
      type:"select",
      displayName: "Profession",
      select: [
        {
          text: "Doctor",
          value: "Doctor"
        },
        {
          text: "Artist",
          value: "Artist"
        },
        {
          text: "Developer",
          value: "Developer"
        }
      ]
    }
  ])

  /////////////////////////////////////////////////////////

}
