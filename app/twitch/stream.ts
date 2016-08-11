export interface IStream {
    game: string;
    viewers: number;
    preview: string;
    name: string;

}

export class Stream implements IStream {

    constructor(
        public game: string,
        public viewers: number,
        public preview: string,
        public name: string) {

    }
}