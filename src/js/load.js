export default class Load {
    constructor() {
        this.handlers = [];
    }
    subscribe(fn) {
        this.handlers.push(fn);
    }
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }
    fire() {
        this.handlers.forEach(fn => {
            fn.call()
        })
    }
}