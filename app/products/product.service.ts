import { Injectable } from 'angular2/core';
import { IProduct } from './product';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';
    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                .map((response: Response) => <IProduct[]>response.json())
                .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    getCompare(id1: number, id2: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id1));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}