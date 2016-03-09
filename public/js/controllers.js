'use strict';

import angular from 'angular';

// @ngInject
export default angular.module('controllers', [])

// @ngInject
.controller('AppController', function ($scope, Upload, $http) {
  console.log(333333);
  var vm = this;

  vm.status = 'INIT'; // 'INIT' | 'UPLOADING' | 'SUCCESS' | 'ERROR'

  vm.text = `从明天起，
    做一个幸福的人,
    喂马、劈柴，周游世界。
    从明天起，
    关心粮食和蔬菜。
    我有一所房子，
    面朝大海，春暖花开。
  `;

  vm.style = {

  };
  vm.resultStyle = { display: 'none' };

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

      var newStyle = document.createElement('style');
      newStyle.appendChild(document.createTextNode(resp.data.style));
      document.head.appendChild(newStyle);

      var previewElement = document.querySelector('#preview'); angular.element(previewElement).css('font-family', resp.data.fontFamily);

      vm.downloadUrl = resp.data.zipUrl;
      vm.resultStyle = { display: 'block !important' };

      vm.status = 'SUCCESS';
    }, function (resp) {

      console.log('Error status: ' + resp.status);
      vm.status = 'ERROR';
    }, function (evt) {

      vm.status = 'UPLOADING';
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total, 10);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });

  };
});
