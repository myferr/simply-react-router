"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBrowserHistory = void 0;
var BrowserHistory = /** @class */ (function () {
    function BrowserHistory() {
        this.listeners = [];
        this.location = window.location;
    }
    BrowserHistory.prototype.listen = function (callback) {
        this.listeners.push(callback);
    };
    BrowserHistory.prototype.push = function (path) {
        var _this = this;
        window.history.pushState({}, '', path);
        this.listeners.forEach(function (callback) { return callback(_this.location); });
    };
    return BrowserHistory;
}());
function createBrowserHistory() {
    return new BrowserHistory();
}
exports.createBrowserHistory = createBrowserHistory;
