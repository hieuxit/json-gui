directives.directive('jsonInput', function() {
  return {
  controller: function($element) {
      this.evaluate = function(parameter, dependencies){
          var bool = true;
          this.message = [];
          if(parameter.required){
            if(parameter.value==null || typeof(parameter.value)=="undefined" || parameter.value==""){
              this.message.push("This field is required");
              bool = false;
            }
          }
          var validationFunction = new Function("return function v(parameter, dependencies){var isValid = {valid:true, message:''};"+this.isValid+" return isValid;}")();
          var validation = validationFunction(parameter, dependencies);
          if(!validation.valid){
              this.message.push(validation.message);
              bool = false;
          }
          return {message:this.message, isValid:bool};
      }
  }
}
});
