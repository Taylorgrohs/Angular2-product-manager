System.register(['angular2/core', 'angular2/router', './product.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1;
    var CarCompareComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            CarCompareComponent = (function () {
                function CarCompareComponent(_routeParams, _router, _productService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._productService = _productService;
                    this.pageTitle = "Car Compare";
                }
                CarCompareComponent.prototype.ngOnInit = function () {
                    if (!this.product1) {
                        var id1 = +this._routeParams.get('id1');
                        console.log(id1);
                        this.getProduct1(id1);
                    }
                    ;
                    if (!this.product2) {
                        var id2 = +this._routeParams.get('id2');
                        console.log(id2);
                        this.getProduct2(id2);
                    }
                };
                CarCompareComponent.prototype.getProduct1 = function (id1) {
                    var _this = this;
                    this._productService.getProduct(id1)
                        .subscribe(function (product) { return _this.product1 = product; }, function (error) { return _this.errorMessage = error; });
                };
                CarCompareComponent.prototype.getProduct2 = function (id2) {
                    var _this = this;
                    this._productService.getProduct(id2)
                        .subscribe(function (product) { return _this.product2 = product; }, function (error) { return _this.errorMessage = error; });
                };
                CarCompareComponent.prototype.onBack = function () {
                    this._router.navigate(['Products']);
                };
                CarCompareComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/products/compare-car.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, product_service_1.ProductService])
                ], CarCompareComponent);
                return CarCompareComponent;
            }());
            exports_1("CarCompareComponent", CarCompareComponent);
        }
    }
});
//# sourceMappingURL=compare-car.component.js.map