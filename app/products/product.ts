export interface IProduct {
    carId: number;
    carName: string;
    description: string;
    imageUrl: string;
    imageUrl1: string;
    noBoost: number;
    boost: number;
    total: number;
    length: number;
    width: number;
    height: number;
    surface: number;

}

export class Product implements IProduct {

    constructor(public carId: number,
                public carName: string,
                public description: string,
                public imageUrl: string,
                public imageUrl1: string,
                public noBoost: number,
                public boost: number,
                public total: number,
                public length: number,
                public width: number,
                public height: number,
                public surface: number) {

    }
}