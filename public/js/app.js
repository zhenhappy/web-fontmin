'use strict';

import components from './components';
import ngFileUpload from 'ng-file-upload';

angular.module('webFontmin', [

  //
  // 'assets.template.access',
  //
  ngFileUpload,
  components.name
]);

setTimeout(function () {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['webFontmin']);
  });
}, 1100);
