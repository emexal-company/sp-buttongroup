import { __decorate, __metadata } from "tslib";
import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import { Button } from '@spectrum/sp-button';
import labelStyles from './buttongroup.styles';
import standardTemplate from './buttongroup.template';
let Buttongroup = class Buttongroup extends Base {
    constructor() {
        super(...arguments);
        this.vertical = false;
    }
    render() {
        return standardTemplate.call(this);
    }
    getButtons() {
        return this.buttons
            .assignedNodes({ flatten: true })
            .filter((e) => e instanceof Button);
    }
    handleSlotChange() {
        if (this.buttons) {
            this.getButtons().slice(1).forEach((b) => b.style.marginLeft = 'var(--spectrum-actionbuttongroup-text-button-gap-x, var(--spectrum-global-dimension-size-100))');
        }
    }
    handleClick(e) {
        const clickedButtons = e.composedPath().filter((t) => t instanceof Button);
        if ((clickedButtons.length === 1) && (!clickedButtons[0].disabled)) {
            this.getButtons().forEach((b) => b.selected = (b === clickedButtons[0]));
        }
    }
};
Buttongroup.componentStyles = labelStyles;
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Buttongroup.prototype, "vertical", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLElement)
], Buttongroup.prototype, "buttons", void 0);
Buttongroup = __decorate([
    customElement('sp-buttongroup')
], Buttongroup);
export { Buttongroup };
//# sourceMappingURL=buttongroup.component.js.map