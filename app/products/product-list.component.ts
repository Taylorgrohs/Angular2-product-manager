import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { TurnSpeedFilterPipe } from './turnspeed-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe, TurnSpeedFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 150;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string;
    speedFilter: boolean = false;
    errorMessage: string;
    products: IProduct[];
    toggle = true; // start with true == shortDate


    constructor(private _productService: ProductService){

    }

    toggleFilter() {this.toggle = !this.toggle;
                    console.log("hello");
                };
    turnFilter() { this.speedFilter = !this.speedFilter; }    


    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);

    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
