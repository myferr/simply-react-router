import React from 'react';
interface RouteConfig {
    [path: string]: React.ReactNode;
}
declare class RouterClass {
    private history;
    private routes;
    constructor();
    Routes(routes: RouteConfig): RouteConfig;
    Render(root: HTMLElement | null, routes: RouteConfig): void;
}
declare class IndexClass {
    Set(root: HTMLElement | null, ComponentPage: React.ReactNode): void;
}
declare const Index: IndexClass;
declare const Router: RouterClass;
export { Router, Index };
