import { Component, OnInit, OnDestroy } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';

@Component ({
    templateUrl: 'app/products/compare-car.component.html',
    
})

export class CarCompareComponent implements OnInit {
    pageTitle: string = "Car Compare";
    product1: IProduct;
    product2: IProduct;
    errorMessage: string;
    
    constructor(private _routeParams: RouteParams,
                private _router: Router,
                private _productService: ProductService) {
     
    }
    ngOnInit() {
        if (!this.product1) {
            let id1 = +this._routeParams.get('id1');
            console.log(id1);
            this.getProduct1(id1);
        };
        if (!this.product2) {   
            let id2 = +this._routeParams.get('id2');
            console.log(id2);
            this.getProduct2(id2);
        }
    }

    getProduct1(id1: number) {
        this._productService.getProduct(id1)
            .subscribe(
                product => this.product1 = product,
                error => this.errorMessage = <any>error);
          
    }
    getProduct2(id2: number) {
        this._productService.getProduct(id2)
            .subscribe(
                product => this.product2 = product,
                error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }
}