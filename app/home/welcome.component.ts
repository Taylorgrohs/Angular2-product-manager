import { Component, OnInit, OnDestroy } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { IProduct } from '../products/product';
import { ProductService } from '../products/product.service';

@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    public pageTitle: string = "Welcome";
    car: IProduct;
    errorMessage: string;
    
    constructor(
                private _productService: ProductService) {
     
    }
    ngOnInit() {
        if (!this.car) {
        var id = Math.floor(Math.random() * 25) +1;
        this.getCar(id);
        }
    }

    getCar(id: number) {
        this._productService.getProduct(id)
            .subscribe(
                product => this.car = product,
                error => this.errorMessage = <any>error);
    }
}

