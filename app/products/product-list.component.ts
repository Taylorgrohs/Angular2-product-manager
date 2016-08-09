import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { TurnSpeedFilterPipe } from './turnspeed-filter.pipe';
import { SurfaceAreaFilterPipe } from './surfacearea-filter.pipe';
import { NameFilterPipe } from './name-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
import { CarCompareComponent } from './compare-car.component';
@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe, TurnSpeedFilterPipe, SurfaceAreaFilterPipe, NameFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 150;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string;
    speedFilter: number = 0;
    areaFilter: number = 0;
    abcFilter: number = 1;
    firstCarPick: number = 0;
    secondCarPick: number = 0;

    errorMessage: string;
    products: IProduct[];
    toggle = true; // start with true == shortDate


    constructor(private _productService: ProductService){

    }
    nameFilter() {
         if(this.abcFilter === 1){
            this.abcFilter = 2;
        } else {
            this.abcFilter = 1;
        } 
    }
    surfaceFilter() {
        if(this.areaFilter === 0) {
        this.areaFilter = 1;
        } else if(this.areaFilter === 1){
            this.areaFilter = 2;
        } else {
            this.areaFilter = 1;
        } 
    }
    turnFilter() { 
        if(this.speedFilter === 0) {
        this.speedFilter = 1;
        } else if(this.speedFilter === 1){
            this.speedFilter = 2;
        } else {
            this.speedFilter = 1;
        } 
    }    
    firstCarSelected(value: number) {
        this.firstCarPick = value;
        console.log(value);
    }
    secondCarSelected(value2: number) {
        this.secondCarPick = value2;
        console.log(value2);
    }
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
