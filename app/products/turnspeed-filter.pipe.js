System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var TurnSpeedFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TurnSpeedFilterPipe = (function () {
                function TurnSpeedFilterPipe() {
                }
                // transform(array: Array<string>, args: string): Array<string> {
                //     if (typeof args[0] === "undefined") {
                //         return array;
                //     
                TurnSpeedFilterPipe.prototype.transform = function (array, args) {
                    var array1 = array;
                    var array2 = array;
                    if (args[0] === 2) {
                        array.sort(function (a, b) {
                            if (a.total < b.total) {
                                return 1;
                            }
                            else if (a.total > b.total) {
                                return -1;
                            }
                            else {
                                return 0;
                            }
                        });
                        return array;
                    }
                    else if (args[0] === 1) {
                        array.sort(function (a, b) {
                            if (a.total < b.total) {
                                return -1;
                            }
                            else if (a.total > b.total) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                        return array;
                    }
                    else {
                        return array;
                    }
                };
                TurnSpeedFilterPipe = __decorate([
                    core_1.Pipe({
                        name: "turnFilter"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TurnSpeedFilterPipe);
                return TurnSpeedFilterPipe;
            }());
            exports_1("TurnSpeedFilterPipe", TurnSpeedFilterPipe);
        }
    }
});
// import { PipeTransform, Pipe } from 'angular2/core';
// import { IProduct } from './product';
// @Pipe({
//     name: 'turnFilter'
// })
// export class TurnSpeedFilterPipe implements PipeTransform {
//     transform(value: IProduct[], args: string[]): IProduct[] {
//         let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
//         return filter ? value.filter((product: IProduct) =>
//         product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
//     }
// }
//     transform(value: IProduct[], args: string[]): IProduct[] {
//         let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
//         return filter ? value.filter((product: IProduct) =>
//         product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
//         transform(value: IProduct[], args: number[]): IProduct[] {
//             let filter: number =  args[0] ? args[0] : null;
//             return filter ? value.filter((product: IProduct) => 
//             product.noBoost.sort((a: any, b: any) => {
//       if (a < b) {
//         return -1;
//       } else if (a > b) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//     return array;
//     }) : value;
// }
// export class ArraySortPipe {
//   transform(array: Array<string>, args: string): Array<string> {
//     array.sort((a: any, b: any) => {
//       if (a < b) {
//         return -1;
//       } else if (a > b) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//     return array;
//   } 
//# sourceMappingURL=turnspeed-filter.pipe.js.map