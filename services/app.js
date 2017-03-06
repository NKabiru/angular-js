angular.module('app', []);

// Service
angular.module('app').factory('message', function() {
  var messages = {};

  messages.list = [];

  messages.add = function(message) {
    messages.list.push({id:messages.list.length, text: message});
  }
  return messages;
});

// Controller that handles service
angular.module('app').controller('ListCtrl', function(messages) {
  this.messages = messages.list;
});

angular.module('app').controller('PostCtrl', function(messages) {

  this.newMessage = 'Hello world!';
  this.addMessage = function(message){
    messages.add(message);
    this.newMessage = '';
  };
  
});
