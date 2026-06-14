class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.history = [homepage];
        this.current = 0;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.history = this.history.slice(0, this.current + 1);
        this.history.push(url);
        this.current++;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        this.current = Math.max(0, this.current - steps);
        return this.history[this.current];
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        this.current = Math.min(
            this.history.length - 1,
            this.current + steps
        );
        return this.history[this.current];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
