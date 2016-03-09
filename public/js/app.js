'use strict';

import angular from 'angular';
import ngFileUpload from 'ng-file-upload';
import components from './components';
import controllers from './controllers';

angular.module('webFontmin', [
  ngFileUpload,
  components.name,
  controllers.name
]);

setTimeout(function () {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['webFontmin']);
  });
}, 1100);
