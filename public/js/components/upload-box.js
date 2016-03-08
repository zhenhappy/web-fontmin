'use strict';

// @ngInject
export default ($location) => {

  return {
    restrict: 'E',
    replace: true,
    template: getTpl(),
    scope: true,
    scope: {},
    controller: controller,
    controllerAs: 'vm',
    bindToController: {}
  };

  // /////////////

  // @ngInject
  function controller($scope, Upload, $http) {
    var vm = this;

    vm.uploadFiles = $files => {
      if (!$files || $files.length < 1) {
        return;
      }

      Upload.upload({
        url: 'upload-font',
        data: {
          file: $files[0],
          name: 'forsigner'
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
  }

  function getTpl() {
    let tpl = `
      <div class="upload-box">
        <div
          ngf-select="vm.uploadFiles($files)"
          ngf-drop="vm.uploadFiles($files)"
          class="drop-box"
          ngf-drag-over-class="'dragover'"
          ngf-multiple="true" >
          +
        </div>

        <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>
      </div>
    `;
    return tpl;
  }
};
