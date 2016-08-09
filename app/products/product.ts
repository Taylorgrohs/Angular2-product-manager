export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
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

    constructor(public productId: number,
                public productName: string,
                public productCode: string,
                public releaseDate: string,
                public price: number,
                public description: string,
                public starRating: number,
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

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}