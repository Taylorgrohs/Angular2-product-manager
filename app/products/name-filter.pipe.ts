import { PipeTransform, Pipe } from "angular2/core";
import { IProduct } from './product';
@Pipe({
    name: "nameFilter"
})
export class NameFilterPipe implements PipeTransform {
    transform(array: IProduct[], args: number[]): IProduct[] {
        if(args[0] === 2) {
         array.sort((a,b) => {
            if (a.carId < b.carId) {
                return 1
            } else if (a.carId > b.carId) {
                return -1;
            } else {
                return 0;
            }

        });
        return array;
    } else if (args[0] === 1) {
        array.sort((a,b) => {
            if (a.carId < b.carId) {
                return -1
            } else if (a.carId > b.carId) {
                return 1;
            } else {
                return 0;
            }

        });
        return array;
        } else  {
            return array
        }
    }
};