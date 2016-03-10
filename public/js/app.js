'use strict';

import angular from 'angular';
import ngFileUpload from 'ng-file-upload';
import controllers from './controllers';

angular.module('webFontmin', [ngFileUpload, controllers.name]);

angular.element(document).ready(function () {
  angular.bootstrap(document, ['webFontmin']);
  window.onload = function() {
    console.log(121);
    angular.element(document.getElementById('loading')).css('display', 'none');
  }
});
