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
  function controller($scope) {
  }

  function getTpl() {
    let tpl = `
      <div class="box clearfix">
        <div class="box-edit pull-left">
          <textarea placeholder="道可道，非常道" autofocus="autofocus" ng-model="vm.text"></textarea>
        </div>
        <div class="box-preview pull-left">{{vm.text}}</div>
      </div>
    `;
    return tpl;
  }
};
