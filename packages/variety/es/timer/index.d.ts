import { LitElement } from "lit";
declare class ViewTimer extends LitElement {
    static styles: import("lit").CSSResult;
    duration: number;
    private end;
    private remaining;
    private count;
    render(): import("lit").TemplateResult<1>;
    start(): void;
    pause(): void;
    reset(): void;
    tick(): void;
    get running(): number;
    connectedCallback(): void;
}
export default ViewTimer;
