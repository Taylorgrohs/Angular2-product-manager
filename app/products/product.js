System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product(carId, carName, description, imageUrl, imageUrl1, noBoost, boost, total, length, width, height, surface) {
                    this.carId = carId;
                    this.carName = carName;
                    this.description = description;
                    this.imageUrl = imageUrl;
                    this.imageUrl1 = imageUrl1;
                    this.noBoost = noBoost;
                    this.boost = boost;
                    this.total = total;
                    this.length = length;
                    this.width = width;
                    this.height = height;
                    this.surface = surface;
                }
                return Product;
            }());
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=product.js.map