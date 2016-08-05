System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product(productId, productName, productCode, releaseDate, price, description, starRating, imageUrl, imageUrl1, noBoost, boost, total, length, width, height, surface) {
                    this.productId = productId;
                    this.productName = productName;
                    this.productCode = productCode;
                    this.releaseDate = releaseDate;
                    this.price = price;
                    this.description = description;
                    this.starRating = starRating;
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
                Product.prototype.calculateDiscount = function (percent) {
                    return this.price - (this.price * percent / 100);
                };
                return Product;
            }());
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=product.js.map