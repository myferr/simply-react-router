"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = exports.Router = void 0;
var react_dom_1 = require("react-dom");
var history_js_1 = require("./history.js");
var react_1 = require("react");
var RouterClass = /** @class */ (function () {
    function RouterClass() {
        this.history = (0, history_js_1.createBrowserHistory)();
        this.routes = {};
    }
    RouterClass.prototype.Routes = function (routes) {
        return routes;
    };
    RouterClass.prototype.Render = function (root, routes) {
        var _this = this;
        this.routes = routes;
        this.history.listen(function (location) {
            var path = location.pathname.replace(/\/$/, ''); // Remove the trailing slash
            var route = _this.routes[path];
            if (route) {
                if (root) {
                    root.innerHTML = '';
                    if (react_1.default.isValidElement(route)) {
                        react_dom_1.default.render(route, root);
                    }
                    else {
                        console.error('Invalid route value:', route);
                    }
                }
            }
        });
        this.history.push(window.location.pathname);
    };
    return RouterClass;
}());
var IndexClass = /** @class */ (function () {
    function IndexClass() {
    }
    IndexClass.prototype.Set = function (root, ComponentPage) {
        if (window.location.pathname == '/') {
            if (react_1.default.isValidElement(ComponentPage)) {
                react_dom_1.default.render(ComponentPage, root);
            }
            else {
                console.error('Invalid route value:', ComponentPage);
            }
        }
    };
    return IndexClass;
}());
var Index = new IndexClass();
exports.Index = Index;
var Router = new RouterClass();
exports.Router = Router;
