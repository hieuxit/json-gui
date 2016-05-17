angular.module("templateCache",[]).run(["$templateCache",function(e){e.put("datetime/datetime.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col datetime-col" ng-class="{\'has-error\': !isParameterValid}">\n        <input ng-if="parameter.hasDate" type="date" ng-model="parameter.value" class="form-control" ng-disabled="parameter.disabled">\n        <input ng-if="parameter.hasTime" type="time" step="60" ng-model="parameter.value" class="form-control" ng-disabled="parameter.disabled">\n        <div class="error-message" ng-repeat="msg in parameter.message">{{msg}}</div>\n    </div>\n</div>\n'),e.put("domains/domains.html",'<div class="row parameter-row">\n\n    <div class="col-xs-12 col-md-6 col-md-offset-3 par-name-col map-container ng-binding" ng-class="{\'disabled\' : parameter.disabled}">\n        <div style="width:100%;height:{{height}}" id="{{parameter.dbName}}map" ng-class="{\'map-has-error\' : !isParameterValid}"></div>\n        <div class="error-message" ng-repeat="msg in parameter.message">{{msg}}</div>\n        <div ng-show="parameter.drawDomains" ng-repeat="val in parameter.value.domains track by $index">\n            Domain number {{$index+1}} - South-West: ({{val.southWest.lat | number:4}}, {{val.southWest.long | number:4}}) North-East: ({{val.northEast.lat | number:4}}, {{val.northEast.long | number:4}})<br/>\n        </div>\n        <div ng-show="parameter.drawMarkers" ng-repeat="mark in parameter.value.markers track by $index">\n            Marker {{$index+1}}: ({{mark.lat | number:4}}, {{mark.long | number:4}})\n        </div>\n\n    </div>\n    <div class="modal fade" id="{{parameter.dbName}}modal">\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <div class="modal-header">\n                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                    <h4 class="modal-title">Delete domain</h4>\n                </div>\n                <div class="modal-body">\n                    <p>Do you want to delete domain number <span id="number"></span><span ng-if="parameter.onlyNested" id="lastDomain"> and all his sub-domains</span>?</p>\n                </div>\n                <div class="modal-footer">\n                    <button type="button" class="btn btn-warning" data-dismiss="modal">No</button>\n                    <button type="button" class="btn btn-success">Yes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'),e.put("fileupload/fileupload.html",'<div class="row parameter-row" id="{{parameter.dbName}}">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col upload-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col file-container" ng-class="{\'has-error\': !isParameterValid, \'disabled\' : parameter.disabled}">\n        <!--        <div ngf-drop ngf-select ng-model="file" class="drop-box" ngf-drag-over-class="dragover" ngf-multiple="true" ngf-allow-dir="false" accept="image/*,application/pdf" ngf-pattern="\'image/*,application/pdf\'">Drop Namelist</div>-->\n\n        <form  action="upload.php" method="POST" enctype="multipart/form-data">\n\n            <fieldset>\n                <div>\n                    <input type="file" id="fileselect" name="fileselect[]" multiple="multiple"  style="visibility:hidden"/>\n                    <div id="filedrag" ng-click="openInput()">Click or drop files here</div>\n                </div>\n                <div class="error-message" ng-repeat="msg in parameter.message">{{msg}}</div>\n                <div class="error-message">\n                    <div ng-repeat="val in errorUpload">{{val}}\n                    </div>\n                </div>\n                 <div class="success-message" ng-show="parameter.value.length!=0">\n                   Uploaded files:\n                   <ul>\n                    <li ng-repeat="file in parameter.value track by $index">\n                        <span class="uploaded-file">{{file.fileName}}</span>&nbsp;&nbsp;&nbsp;<span ng-if="!parameter.disabled" ng-click="removeFile($index)" class="file-unload">Remove</span>\n                    </li>\n                  </ul>\n                </div>\n            </fieldset>\n\n        </form>\n    </div>\n    <!--\n<div class="modal fade" id="modal">\n<div class="modal-dialog">\n<div class="modal-content">\n<div class="modal-header">\n<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n<h4 class="modal-title">Warning</h4>\n</div>\n<div class="modal-body">\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-warning" data-dismiss="modal">Ok</button>\n</div>\n</div>\n</div>\n</div>\n\n-->\n\n\n</div>\n'),e.put("float/float.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col" ng-class="{\'has-error\': !isParameterValid}">\n        <input type="number" step="1" ng-model="parameter.value" class="form-control" ng-disabled="parameter.disabled">\n        <div class="error-message" ng-repeat="msg in parameter.message">{{msg}}</div>\n    </div>\n</div>\n'),e.put("integer/integer.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col" ng-class="{\'has-error\': !isParameterValid}">\n        <input type="number" step="1" ng-model="parameter.value" class="form-control" ng-disabled="parameter.disabled">\n        <div class="error-message" ng-repeat="msg in parameter.message track by $index">{{msg}}</div>\n    </div>\n</div>\n'),e.put("json-gui/json-gui.html",'<div class="container-fluid" id="model-container">\n    <div class="row">\n        <div class="col-xs-12 col-md-10 groups">\n            <div ng-repeat="group in data.parametersCategories">\n                <div class="row group-container">\n                    <div class="group-name" id="group{{group.value}}">\n                        {{group.name}}\n                    </div>\n                    <div class="group-parameters col-xs-12">\n                        <div ng-repeat="(key, value) in hashToArray(pars)">\n                            <integer json-input ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'integer\'" parameter="pars[value]" dependencies = "dep[value]"></integer>\n                            <float json-input ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'float\'" parameter="pars[value]" dependencies = "dep[value]"></float>\n                            <datetime json-input ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'datetime\'" parameter="pars[value]" dependencies = "dep[value]"></datetime>\n                            <select-parameter json-input ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'select\'" parameter="pars[value]" dependencies =" dep[value]"></select-parameter>\n                            <text-parameter json-input ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'text\'" parameter="pars[value]" dependencies = "dep[value]"></text-parameter>\n                            <domains json-input ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'domains\'" parameter="pars[value]" dependencies = "dep[value]"></domains>\n                            <fileupload json-input ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'fileupload\'" parameter="pars[value]" dependencies = "dep[value]"></fileupload>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-2" id="scrollspy" style="padding-left:0px">\n            <ul id="nav" class="nav hidden-xs hidden-sm" style="margin-top:20px;width:100%;padding-left:10px; border-left:1px solid #dedede;">\n                <li ng-repeat="group in data.parametersCategories">\n                    <a href="#group{{group.value}}">{{group.name}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n'),e.put("select/select.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col" ng-class="{\'has-error\': !isParameterValid}">\n        <select ng-model="parameter.value" ng-options="option.value as option.name for option in parameter.values" class="form-control" ng-disabled="parameter.disabled"></select>\n        <div class="error-message" ng-repeat="msg in parameter.message">{{msg}}</div>\n    </div>\n</div>\n'),e.put("text/text.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col" ng-class="{\'has-error\': !isParameterValid}">\n        <textarea ng-model="parameter.value" ng-disabled="parameter.disabled" class="form-control" style="resize:none"></textarea>\n        <div class="error-message" ng-repeat="msg in parameter.message">{{msg}}</div>\n    </div>\n</div>\n')}]);var directives=angular.module("json-gui",["ngFileUpload","templateCache"]);directives.directive("jsonInput",function(){return{controller:["$element",function(e){this.evaluate=function(e,a){var r=!0;this.message=[],e.required&&(null!=e.value&&"undefined"!=typeof e.value&&""!=e.value||(this.message.push("This field is required"),r=!1));var t=new Function("return function v(parameter, dependencies){var isValid = {valid:true, message:''};"+this.isValid+" return isValid;}")(),n=t(e,a);return n.valid||(this.message.push(n.message),r=!1),{message:this.message,isValid:r}}}]}}),directives.directive("datetime",function(){return{restrict:"E",templateUrl:"datetime/datetime.html",replace:!0,require:"^jsonInput",scope:{parameter:"=",dependencies:"="},link:function(e,a,r,t){e.parameter.value=new moment(e.parameter.value).toDate(),e.timeValid=function(){return!0},e.message=[],t.isValid=e.parameter.isValid,e.validationFunction=t.validationFunction,e.parameter.evaluate=function(){e.parameter.message=[];for(var a=t.evaluate(e.parameter,e.dependencies),r=0;r<a.message.length;r++)e.parameter.message.push(a.message[r]);var n=e.timeValid();return n=a.isValid&&n,e.isParameterValid=n,n},e.$watch("parameter.value",function(){e.parameter.evaluate()})}}}),directives.directive("domains",["$timeout",function(e){return{restrict:"E",templateUrl:"domains/domains.html",replace:!0,require:"^jsonInput",scope:{parameter:"=",dependencies:"="},link:function(a,r,t,n){a.parameter.dbName;a.domainsValid=function(){var e=!0;return"undefined"!=typeof a.parameter.required&&a.parameter.required.domains&&a.parameter.drawDomains&&("undefined"==typeof a.mapRectangles||0===a.mapRectangles.length)&&(a.parameter.message.push("Select at least one domain"),e=!1),"undefined"!=typeof a.parameter.required&&a.parameter.required.markers&&a.parameter.drawMarkers&&("undefined"==typeof a.mapMarkers||0===a.mapMarkers.length)?(a.parameter.message.push("Add at least one marker"),!1):e},a.message=[],n.isValid=a.parameter.isValid,a.validationFunction=n.validationFunction,a.parameter.evaluate=function(){a.parameter.message=[];for(var e=n.evaluate(a.parameter,a.dependencies),r=0;r<e.message.length;r++)a.parameter.message.push(e.message[r]);var t=a.domainsValid();return t=e.isValid&&t,a.isParameterValid=t,t},a.$watch("parameter.value",function(){a.parameter.evaluate()},!0),a.initializeParameter=function(){var r=2*parseInt($("body").css("width"))/6;a.height=r+"px",a.mapRectangles=[],a.mapMarkers=[],s(),e(function(){var r,t=a.parameter.value.domains.length,n=0;if(a.parameter.drawDomains){for(var s in a.parameter.value.domains){if(n==a.parameter.maxDomains){a.parameter.value.domains.splice(n,t-n);break}r=a.parameter.value.domains[n];var i=m(r,a.map);if(a.mapRectangles.push(i),!d(r.id))break;n++}a.modal=$("#"+a.parameter.dbName+"modal"),a.modal.find(".btn-success").click(function(){o(a.deletingIndex)}),n=0}if(a.parameter.drawMarkers){var l=[];for(var g in a.parameter.value.markers){if(l[a.parameter.value.markers[g].id]=p(a.parameter.value.markers[g]),n==a.parameter.maxMarkers){e(function(){a.parameter.value.markers.splice(n,t-n)});break}var v=u(a.parameter.value.markers[g],a.map,n);a.mapMarkers.push(v),n++}for(var f in l)l[f]||c(f)}},!0)};var s=function(){var r=document.getElementById(a.parameter.dbName+"map"),t={center:new google.maps.LatLng(a.parameter.center.lat,a.parameter.center["long"]),zoom:a.parameter.mapZoom,mapTypeId:google.maps.MapTypeId.HYBRID};a.map=new google.maps.Map(r,t),a.rectOptions={strokeColor:"#00BCD4",strokeWeight:1,draggable:!0,fillColor:"#00BCD4",fillOpacity:.5,editable:!0,clickable:!0,zIndex:10,map:a.map};var n=[];a.parameter.disabled||(a.parameter.drawMarkers&&n.push(google.maps.drawing.OverlayType.MARKER),a.parameter.drawDomains&&n.push(google.maps.drawing.OverlayType.RECTANGLE)),a.drawingManager=new google.maps.drawing.DrawingManager({drawingControl:!0,drawingControlOptions:{position:google.maps.ControlPosition.TOP_CENTER,drawingModes:n},rectangleOptions:a.rectOptions}),a.drawingManager.setMap(a.map),a.parameter.disabled||(google.maps.event.addListener(a.drawingManager,"markercomplete",function(r){var t=(new Date).getTime();a.mapMarkers.length;return a.mapMarkers.length==a.parameter.maxMarkers?void r.setMap(null):(r.addListener("click",function(){c(t)}),void e(function(){v(r,t)?a.mapMarkers.push(r):r.setMap(null)},0))}),google.maps.event.addListener(a.drawingManager,"rectanglecomplete",function(r){var t=(new Date).getTime(),n=a.rectOptions.zIndex+1;return a.rectOptions.zIndex=n,a.drawingManager.setOptions({rectangleOptions:a.rectOptions}),a.mapRectangles.length==a.parameter.maxDomains?void r.setMap(null):(r.setTitle=t,r.addListener("bounds_changed",function(){i(r,t)}),r.addListener("click",function(){l(t)}),void e(function(){a.mapRectangles.push(r),f(r,t)},0))}))},i=function(r,t){var n=r.getBounds();e(function(){var e=b(t,a.parameter.value.domains),r=a.parameter.value.domains[e];"undefined"!=typeof r&&(r.northEast.lat=n.getNorthEast().lat(),r.northEast["long"]=n.getNorthEast().lng(),r.southWest.lat=n.getSouthWest().lat(),r.southWest["long"]=n.getSouthWest().lng(),d(t))})},l=function(e){var r=parseInt(b(e,a.parameter.value.domains));a.modal.find("#number").html(r+1),r==a.mapRectangles.length-1?a.modal.find("#lastDomain").css("display","none"):a.modal.find("#lastDomain").css("display","inline"),a.deletingIndex=r,a.modal.modal("show")},o=function(r){if(a.modal.modal("hide"),a.parameter.onlyNested)a.parameter.allowMarkersOutDomains||0!=r||g(),e(function(){for(var e=a.mapRectangles.length-r,t=0;e>t;t++)a.mapRectangles[t+r].setMap(null);a.mapRectangles.splice(r,e),a.parameter.value.domains.splice(r,e)},0);else{var t=h(a.parameter.value.domains[r]);e(function(){a.mapRectangles[r].setMap(null),a.mapRectangles.splice(r,1),a.parameter.value.domains.splice(r,1)},0),a.parameter.allowMarkersOutDomains||e(function(){for(var e=0;e<t.length;e++)p(t[e])||c(t[e].id)},0)}},d=function(r){if(!a.parameter.onlyNested)return!0;var t=b(r,a.parameter.value.domains),n=a.mapRectangles[t],s=n.getBounds();if(t>0){var i=a.mapRectangles[t-1].getBounds();if(s.getSouthWest().lat()<i.getSouthWest().lat()||s.getSouthWest().lat()>i.getNorthEast().lat()||s.getSouthWest().lng()<i.getSouthWest().lng()||s.getSouthWest().lng()>i.getNorthEast().lng()||s.getNorthEast().lat()>i.getNorthEast().lat()||s.getNorthEast().lat()<i.getSouthWest().lat()||s.getNorthEast().lng()>i.getNorthEast().lng()||s.getNorthEast().lng()<i.getSouthWest().lng()){var l=a.mapRectangles.length-t;return e(function(){for(var e=0;l>e;e++){if(offs=e+t,"undefined"==typeof a.mapRectangles[offs])return!1;a.mapRectangles[offs].setMap(null)}a.mapRectangles.splice(t,l),a.parameter.value.domains.splice(t,l)}),!1}}if(t<a.mapRectangles.length-1){var o=a.mapRectangles[t+1].getBounds();if(s.getSouthWest().lat()>o.getSouthWest().lat()||s.getSouthWest().lng()>o.getSouthWest().lng()||s.getNorthEast().lat()<o.getNorthEast().lat()||s.getNorthEast().lng()<o.getNorthEast().lng()){var l=a.mapRectangles.length-t-1;return e(function(){for(var e=0;l>e;e++){var r=e+t+1;if("undefined"==typeof a.mapRectangles[r])return;a.mapRectangles[r].setMap(null)}a.mapRectangles.splice(t+1,l),a.parameter.value.domains.splice(t+1,l)}),!1}}return!0},p=function(e){if(!a.parameter.drawDomains||a.parameter.allowMarkersOutDomains)return!0;if(0==a.parameter.value.domains.length)return!1;if(a.parameter.onlyNested){var r=a.parameter.value.domains[0];return e.lat<r.southWest.lat||e.lat>r.northEast.lat?!1:!(e["long"]<r.southWest["long"]||e["long"]>r.northEast["long"])}for(var t=a.parameter.value.domains,n=0;n<t.length;n++)if(e.lat>t[n].southWest.lat&&e.lat<t[n].northEast.lat&&e["long"]>t[n].southWest["long"]&&e["long"]<t[n].northEast["long"])return!0;return!1},m=function(e,r){var t=new google.maps.Rectangle({strokeColor:"#00BCD4",strokeWeight:1,draggable:!0,fillColor:"#00BCD4",fillOpacity:.5,editable:!0,clickable:!0,zIndex:a.mapRectangles.length,map:r,bounds:{north:e.northEast.lat,south:e.southWest.lat,east:e.northEast["long"],west:e.southWest["long"]}});return a.parameter.disabled?t.setDraggable(!1):(t.addListener("bounds_changed",function(){i(t,e.id)}),t.addListener("click",function(){l(e.id)})),t},u=function(e,r,t){var n=new google.maps.Marker({map:r,position:{lat:e.lat,lng:e["long"]},zIndex:3e3});return a.parameter.disabled||n.addListener("click",function(){c(e.id)}),n},c=function(r){e(function(){var e=b(r,a.parameter.value.markers);a.mapMarkers[e].setMap(null),a.mapMarkers.splice(e,1),a.parameter.value.markers.splice(e,1)},0)},g=function(){for(var e=0;e<a.parameter.value.markers.length;e++)c(a.parameter.value.markers[e].id)},v=function(r,t){var n=0;"undefined"==typeof a.parameter.value.markers?a.parameter.value.markers={}:n=a.parameter.value.markers.length;var s={id:t,lat:r.getPosition().lat(),"long":r.getPosition().lng()};return p(s)?(e(function(){a.parameter.value.markers.push(s)}),!0):!1},f=function(r,t){var n=r.getBounds().getSouthWest(),s=r.getBounds().getNorthEast(),i={id:t,southWest:{lat:n.lat(),"long":n.lng()},northEast:{lat:s.lat(),"long":s.lng()}};e(function(){a.parameter.value.domains.push(i),d(t)})},h=function(e){for(var r,t=[],n=0;n<a.parameter.value.markers.length;n++)r=a.parameter.value.markers[n],r.lat>e.southWest.lat&&r.lat<e.northEast.lat&&r["long"]>e.southWest["long"]&&r["long"]<e.northEast["long"]&&t.push(r);return t},b=function(e,a){for(var r=0;r<a.length;r++)if(a[r].id==e)return r;return-1};e(function(){google.maps.event.addDomListener(window,"load",a.initializeParameter())})}}}]),directives.directive("float",function(){return{restrict:"E",templateUrl:"float/float.html",replace:!0,require:"^jsonInput",scope:{parameter:"=",dependencies:"="},link:function(e,a,r,t){e.floatValid=function(){return"undefined"==typeof e.parameter.value||"NaN"===e.parameter.value?(e.parameter.message.push("Number format is not valid"),!1):!0},e.message=[],t.isValid=e.parameter.isValid,e.validationFunction=t.validationFunction,e.parameter.evaluate=function(){e.parameter.message=[];for(var a=t.evaluate(e.parameter,e.dependencies),r=0;r<a.message.length;r++)e.parameter.message.push(a.message[r]);var n=e.floatValid();return n=a.isValid&&n,e.isParameterValid=n,n},e.$watch("parameter.value",function(){e.parameter.evaluate()})}}}),directives.directive("fileupload",["$timeout","Upload",function(e,a){return{restrict:"E",templateUrl:"fileupload/fileupload.html",replace:!0,require:"^jsonInput",scope:{parameter:"=",dependencies:"="},link:function(a,r,t,n){a.parameter.dbName;a.fileuploadValid=function(){if("undefined"==typeof a.parameter.value||a.parameter.value.length<a.parameter.minUpload){var e="Upload at least "+a.parameter.minUpload;return e+=1==a.parameter.minUpload?" file":" files",a.parameter.message.push(e),!1}return!0},a.message=[],n.isValid=a.parameter.isValid,a.validationFunction=n.validationFunction,a.parameter.evaluate=function(){a.parameter.message=[];for(var e=n.evaluate(a.parameter,a.dependencies),r=0;r<e.message.length;r++)a.parameter.message.push(e.message[r]);var t=a.fileuploadValid();return t=e.isValid&&t,a.isParameterValid=t,t},a.$watch("parameter.value",function(){a.parameter.evaluate()},!0),a.initFileReader=function(){window.File&&window.FileList&&window.FileReader&&a.init()},a.init=function(){a.maxLengthByte=s(a.parameter.maxSize);var e=$("#"+a.parameter.dbName),r=e.find("#fileselect")[0],t=e.find("#filedrag")[0];r.addEventListener("change",a.fileSelectHandler,!1);var n=new XMLHttpRequest;n.upload&&(t.addEventListener("dragover",a.fileDragHover,!1),t.addEventListener("dragleave",a.fileDragHover,!1),t.addEventListener("drop",a.fileSelectHandler,!1),t.style.display="block")},a.fileDragHover=function(e){e.stopPropagation(),e.preventDefault(),e.target.className="dragover"==e.type?"hover":""},a.parseFile=function(r){if(!a.fileHasAllowedExtension(r))return void i("This extension is not allowed. Allowed extensions are: "+a.parameter.allowedExtensions);if(r.size>a.maxLengthByte)return void i("The file named "+r.name+" is too big. The maximum dimension accepted is "+a.parameter.maxSize+".");if(l(r.name))return void i("You already uploaded a file with name "+r.name+".");var t=new FileReader;t.onload=function(t){var n={fileName:r.name,data:t.target.result};e(function(){a.parameter.value.push(n)})},t.readAsDataURL(r),e(function(){a.uploadedFilesDescription.push(r)})},a.fileSelectHandler=function(e){a.fileDragHover(e);var r=e.target.files||e.dataTransfer.files;if(a.uploadedFilesDescription.length+r.length>a.parameter.maxUpload)return void i("Reached maximum file uploads allowed ("+a.parameter.maxUpload+").");for(var t,n=0;t=r[n];n++)a.parseFile(t)},a.openInput=function(){e(function(){a.parameter.disabled||$("#"+a.parameter.dbName).find("#fileselect").click()},0)};var s=function(e){e=e.toLowerCase();var a=parseInt(e);return e.indexOf("kb")>0?1e3*a:e.indexOf("mb")>0?1e6*a:e.indexOf("gb")>0?1e9*a:a},i=function(r){e(function(){a.errorUpload.splice(0,0,r)}),e(function(){a.errorUpload.splice(0,1)},5e3)};a.removeFile=function(e){a.parameter.value.splice(e,1),a.uploadedFilesDescription.splice(e,1)},a.fileHasAllowedExtension=function(e){var r=a.parameter.allowedExtensions;if("undefined"==typeof r)return!0;if("string"==typeof r&&""!=r)return e.name.endsWith("."+r);if(Array.isArray(r)){for(var t=0;t<r.length;t++)if(e.name.endsWith("."+r[t]))return!0;return!1}return!0};var l=function(e){for(var r=0;r<a.parameter.value.length;r++)if(0==a.parameter.value[r].fileName.localeCompare(e))return!0;return!1};a.errorUpload=[],a.uploadedFilesDescription=[],e(function(){a.parameter.disabled||a.initFileReader()})}}}]),directives.directive("integer",function(){return{restrict:"E",templateUrl:"integer/integer.html",replace:!0,require:"^jsonInput",scope:{parameter:"=",dependencies:"="},link:function(e,a,r,t){e.integerValid=function(){return e.parameter.value%1!==0||"NaN"===e.parameter.value||"undefined"==typeof e.parameter.value?(e.parameter.message.push("Number is not an Integer"),!1):!0},e.message=[],t.isValid=e.parameter.isValid,e.validationFunction=t.validationFunction,e.parameter.evaluate=function(){e.parameter.message=[];for(var a=t.evaluate(e.parameter,e.dependencies),r=0;r<a.message.length;r++)e.parameter.message.push(a.message[r]);var n=e.integerValid();return n=a.isValid&&n,e.isParameterValid=n,n},e.$watch("parameter.value",function(){e.parameter.evaluate()})}}}),directives.directive("jsonGui",["$timeout",function($timeout){return{restrict:"E",templateUrl:"json-gui/json-gui.html",replace:!0,scope:{data:"="},link:function(scope,elm,attr){scope.pars=[],scope.dep=[],scope.buildParametersArray=function(){try{var e=scope.data.parameters}catch(a){console.log(a)}for(var r in e)scope.pars[e[r].dbName]=e[r]},$timeout(function(){$("#nav").affix({offset:{}}),$("body").scrollspy({target:"#scrollspy"})}),scope.buildDependencies=function(){var e;for(var a in scope.pars){var r={};e=scope.pars[a].dependencies;for(var t=0;t<e.length;t++)r[e[t]]=scope.pars[e[t]];scope.dep[a]=r}},scope.saveConfiguration=function(){console.log(scope.pars.upload.value);var namelist="";for(var par in scope.pars){if(!scope.pars[par].evaluate())return void console.log("Error in some parameter");var functionBody=scope.buildComputingFunction(par);namelist+=scope.pars[par].displayName+": "+eval(functionBody)+";\n"}console.log(namelist)},scope.buildComputingFunction=function(e){var a="var parameter = scope.pars[par];";return a+="var dependencies = [];",scope.pars[e].dependencies.forEach(function(e){a+="dependencies['"+e+"'] = scope.pars['"+e+"'];"}),a+"(function(){"+scope.pars[e].computedResult+"}())"},scope.hashToArray=function(e){var a=[],r=0;for(item in e)a[r]=item,r++;return a};var computedResults=function(){var results=[],result;for(var par in scope.pars){if(result={},!scope.pars[par].evaluate())return void console.log("Error in some parameter");var functionBody=scope.buildComputingFunction(par);result.value=eval(functionBody),result.name=scope.pars[par].dbName,result.parameterType=scope.pars[par].parameterType,results.push(result)}return results},unbind=scope.$watch("data",function(){console.log("data was changed"),scope.buildParametersArray(),scope.buildDependencies();try{scope.data.getComputedResults=computedResults}catch(e){return void console.log(e)}unbind()})}}}]),directives.directive("selectParameter",function(){return{restrict:"E",templateUrl:"select/select.html",replace:!0,require:"^jsonInput",scope:{parameter:"=",dependencies:"="},link:function(e,a,r,t){e.selectValid=function(){return!0},e.message=[],t.isValid=e.parameter.isValid,e.validationFunction=t.validationFunction,e.parameter.evaluate=function(){e.parameter.message=[];for(var a=t.evaluate(e.parameter,e.dependencies),r=0;r<a.message.length;r++)e.parameter.message.push(a.message[r]);var n=e.selectValid();return n=a.isValid&&n,e.isParameterValid=n,n},e.$watch("parameter.value",function(){e.parameter.evaluate()})}}}),directives.directive("textParameter",function(){return{restrict:"E",templateUrl:"text/text.html",replace:!0,require:"^jsonInput",scope:{parameter:"=",dependencies:"="},link:function(e,a,r,t){e.textValid=function(){return!0},e.message=[],t.isValid=e.parameter.isValid,e.validationFunction=t.validationFunction,e.parameter.evaluate=function(){e.parameter.message=[];for(var a=t.evaluate(e.parameter,e.dependencies),r=0;r<a.message.length;r++)e.parameter.message.push(a.message[r]);var n=e.textValid();return n=a.isValid&&n,e.isParameterValid=n,n},e.$watch("parameter.value",function(){e.parameter.evaluate()})}}});