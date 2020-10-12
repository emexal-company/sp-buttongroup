import { Base } from '@spectrum/sp-base';
import { Button } from '@spectrum/sp-button';
export declare class Buttongroup extends Base {
    static componentStyles: import("lit-element").CSSResult;
    vertical: boolean;
    protected buttons: HTMLElement;
    protected render(): import("lit-element").TemplateResult;
    protected getButtons(): Button[];
    protected handleSlotChange(): void;
    protected handleClick(e: MouseEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-buttongroup': Buttongroup;
    }
}
