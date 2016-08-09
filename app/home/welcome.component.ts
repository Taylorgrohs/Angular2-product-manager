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
        var audio = new Audio();
audio.src = "http://sunshinelive.hoerradar.de/sunshinelive-live-mp3-hq?sABC=57767056%230%232n61n9qqpp840sqo5r4nnnso1s5nq66r%23Jroenqvb-Cynlre&amsparams=playerid:Webradio-Player;skey:1467379798";
audio.load();
audio.play();
        }
    }

    getCar(id: number) {
        this._productService.getProduct(id)
            .subscribe(
                product => this.car = product,
                error => this.errorMessage = <any>error);
    }
}

