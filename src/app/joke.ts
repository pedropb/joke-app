export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;

    public toggle() {
        this.hide = !this.hide;
    }

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }
}
