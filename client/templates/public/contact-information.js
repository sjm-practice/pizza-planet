Template.contactInformation.helpers({
  isProfile: function (location) {
    return Template.instance().data.context === "profile" ? true : false;
  }
});
