import { Component, OnInit, OnDestroy } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { StreamService } from './stream.service';
import { IStream } from './stream';

@Component ({
    templateUrl: 'app/twitch/current-streams.component.html',
     styleUrls: ['app/twitch/current-streams.component.css'],
    providers: [StreamService]
    
})

export class CurrentStreamsComponent implements OnInit {
    pageTitle: string = "Current Streams";
    errorMessage: string;
    streams: string;
    constructor(private _routeParams: RouteParams,
                private _router: Router,
                private _streamService: StreamService) {
     
    }
    ngOnInit() {
        this.getStream();

    }

    getStream() {
            this._streamService.getStreams()
                .subscribe(response => this.streams = response,
                error => this.errorMessage = <any>error);
}

    onBack(): void {
        this._router.navigate(['Products']);
    }
}