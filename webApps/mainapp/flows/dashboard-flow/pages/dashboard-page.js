define([], function() {
  'use strict';

  var PageModule = function PageModule() {};
  
  PageModule.prototype.executeSeach = function (firstName, lastName) {
    var query = "FirstName = ''";
    
    if (firstName || lastName) {
      query = "FirstName LIKE '%" + firstName + "%' or LastName LIKE '%" + lastName + "%'"; 
    }
    
    return query;
  };

  return PageModule;
});
