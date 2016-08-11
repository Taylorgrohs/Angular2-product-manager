System.register(['angular2/core', 'angular2/router', './stream.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, stream_service_1;
    var CurrentStreamsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (stream_service_1_1) {
                stream_service_1 = stream_service_1_1;
            }],
        execute: function() {
            CurrentStreamsComponent = (function () {
                function CurrentStreamsComponent(_routeParams, _router, _streamService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._streamService = _streamService;
                    this.pageTitle = "Current Streams";
                }
                CurrentStreamsComponent.prototype.ngOnInit = function () {
                    this.getStream();
                };
                CurrentStreamsComponent.prototype.getStream = function () {
                    var _this = this;
                    this._streamService.getStreams()
                        .subscribe(function (response) { return _this.streams = response; }, function (error) { return _this.errorMessage = error; });
                };
                CurrentStreamsComponent.prototype.onBack = function () {
                    this._router.navigate(['Products']);
                };
                CurrentStreamsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/twitch/current-streams.component.html',
                        styleUrls: ['app/twitch/current-streams.component.css'],
                        providers: [stream_service_1.StreamService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, stream_service_1.StreamService])
                ], CurrentStreamsComponent);
                return CurrentStreamsComponent;
            }());
            exports_1("CurrentStreamsComponent", CurrentStreamsComponent);
        }
    }
});
//# sourceMappingURL=current-streams.component.js.map