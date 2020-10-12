import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function standardTemplate() {
    const classes = {
        'spectrum-ButtonGroup--vertical': this.vertical,
    };
    return html `
        <div class="spectrum-ButtonGroup ${classMap(classes)}" @click="${this.handleClick}">
            <slot @slotchange="${this.handleSlotChange}"></slot>
        </div>
    `;
}
//# sourceMappingURL=buttongroup.template.js.map