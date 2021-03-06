System.register(['angular2/core', 'angular2/router', './product-filter.pipe', './turnspeed-filter.pipe', './surfacearea-filter.pipe', './name-filter.pipe', '../shared/star.component', './product.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_filter_pipe_1, turnspeed_filter_pipe_1, surfacearea_filter_pipe_1, name_filter_pipe_1, star_component_1, product_service_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_filter_pipe_1_1) {
                product_filter_pipe_1 = product_filter_pipe_1_1;
            },
            function (turnspeed_filter_pipe_1_1) {
                turnspeed_filter_pipe_1 = turnspeed_filter_pipe_1_1;
            },
            function (surfacearea_filter_pipe_1_1) {
                surfacearea_filter_pipe_1 = surfacearea_filter_pipe_1_1;
            },
            function (name_filter_pipe_1_1) {
                name_filter_pipe_1 = name_filter_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(_productService) {
                    this._productService = _productService;
                    this.pageTitle = 'Car List';
                    this.imageWidth = 150;
                    this.imageMargin = 2;
                    this.showImage = true;
                    this.speedFilter = 0;
                    this.areaFilter = 0;
                    this.abcFilter = 1;
                    this.firstCarPick = 0;
                    this.secondCarPick = 0;
                    this.toggle = true; // start with true == shortDate
                }
                ProductListComponent.prototype.nameFilter = function () {
                    if (this.abcFilter === 1) {
                        this.abcFilter = 2;
                    }
                    else {
                        this.abcFilter = 1;
                    }
                };
                ProductListComponent.prototype.surfaceFilter = function () {
                    if (this.areaFilter === 0) {
                        this.areaFilter = 1;
                    }
                    else if (this.areaFilter === 1) {
                        this.areaFilter = 2;
                    }
                    else {
                        this.areaFilter = 1;
                    }
                };
                ProductListComponent.prototype.turnFilter = function () {
                    if (this.speedFilter === 0) {
                        this.speedFilter = 1;
                    }
                    else if (this.speedFilter === 1) {
                        this.speedFilter = 2;
                    }
                    else {
                        this.speedFilter = 1;
                    }
                };
                ProductListComponent.prototype.firstCarSelected = function (value) {
                    this.firstCarPick = value;
                    console.log(value);
                };
                ProductListComponent.prototype.secondCarSelected = function (value2) {
                    this.secondCarPick = value2;
                    console.log(value2);
                };
                ProductListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._productService.getProducts()
                        .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
                    console.log(this.products);
                };
                ProductListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'Product List: ' + message;
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/products/product-list.component.html',
                        styleUrls: ['app/products/product-list.component.css'],
                        pipes: [product_filter_pipe_1.ProductFilterPipe, turnspeed_filter_pipe_1.TurnSpeedFilterPipe, surfacearea_filter_pipe_1.SurfaceAreaFilterPipe, name_filter_pipe_1.NameFilterPipe],
                        directives: [star_component_1.StarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map