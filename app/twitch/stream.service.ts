import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { IStream } from './stream';

@Injectable()
export class StreamService {
    private _streamUrl = 'https://api.twitch.tv/kraken/streams?game=rocket+league&limit=6&client_id=mmwmr4jdajwm2jzmm5kxxrcjbsbwfbj';
    constructor(private _http: Http) { }
    
    getStreams() {
        return this._http.get(this._streamUrl)
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}