declare class BrowserHistory {
    private listeners;
    private location;
    constructor();
    listen(callback: any): void;
    push(path: string): void;
}
declare function createBrowserHistory(): BrowserHistory;
export { createBrowserHistory };
