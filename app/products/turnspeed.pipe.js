// import { PipeTransform, Pipe } from 'angular2/core';
// import { IProduct } from './product';
// @Pipe({
//     name: 'turnFilter'
// })
// export class TurnSpeedFilter implements PipeTransform {
//     // transform(value: IProduct[], args: string[]): IProduct[] {
//     //     let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
//     //     return filter ? value.filter((product: IProduct) =>
//     //     product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
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
//# sourceMappingURL=turnspeed.pipe.js.map