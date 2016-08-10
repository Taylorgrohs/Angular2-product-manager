import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { ProductListComponent } from './products/product-list.component';
import { CarCompareComponent } from './products/compare-car.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Products']">Car List</a></li>
                </ul>
                <button class="btn btn-primary play" (click)='playSong()'><span class="glyphicon glyphicon-play-circle" aria-hidden="true" *ngIf='playButton'></span><span class="glyphicon glyphicon-pause" aria-hidden="true" *ngIf='!playButton'></span> {{playButton ? 'Play' : 'Pause'}} Song</button>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent },
    { path: '/compare/:id1/:id2', name:'CarCompare', component: CarCompareComponent }
])
export class AppComponent {
    pageTitle: string = 'Hoccer Battle Cars';
    song: boolean = false;
    playButton: boolean = true;
    audio = new Audio();
    playSong() {
    if(this.song === false) {
        this.audio.src = "../app/assets/music/song.mp3";
        this.audio.load();
        this.audio.play();
        this.song = !this.song;
        this.toggleButton();
        } else if(this.song === true && this.playButton === false) {
            this.audio.pause();
            this.toggleButton();
        } else if (this.song === true && this.playButton === true) {
            this.audio.play();
            this.toggleButton();
        }
    }
    toggleButton(): void {
        this.playButton = !this.playButton;
        
    }

}

