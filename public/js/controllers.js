'use strict';

// @ngInject
export default angular.module('controllers', [])

// @ngInject
.controller('AppController', function($scope, Upload, $http) {
  console.log(333333);
  var vm = this;

  vm.text = '道可道，非常道';

  vm.uploadFiles = $files => {
    if (!$files || $files.length < 1) {
      return;
    }

    Upload.upload({
      url: 'upload-font',
      data: {
        file: $files[0],
        text: vm.text
      }
    }).then(function (resp) {
      console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    }, function (resp) {

      console.log('Error status: ' + resp.status);
    }, function (evt) {

      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total, 10);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });

  };
})
