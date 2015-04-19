angular.module('starter.controllers', [])
.constant('ApiUrl', 'https://polished-api.herokuapp.com/manicures')
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http, ApiUrl) {
  $scope.staticUrl = 'https://polished-api.herokuapp.com';
  $http.get(ApiUrl).then(function(data) {
    $scope.manicures = data['data']['manicures'];
  });
/*  $scope.chats = Chats.all();*/
  //$scope.remove = function(chat) {
    //Chats.remove(chat);
  /*}*/
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $http, ApiUrl) {
  $scope.staticUrl = 'https://polished-api.herokuapp.com';
  $http.get(ApiUrl + '/' + $stateParams.chatId).then(function(data) {
    $scope.manicure = data['data']['manicure'];
    console.log($scope.manicure);
  });
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
