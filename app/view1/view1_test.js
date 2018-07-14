'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
    console.log("THIS IS ME");
    it('should ....', inject(function($controller) {
      //spec body
      console.log("THIS IS ME");
      var view1Ctrl = $controller('View1Ctrl');
      console.log("THIS IS ME");
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
