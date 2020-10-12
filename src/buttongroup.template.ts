import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Buttongroup } from './buttongroup.component';

export default function standardTemplate(this: Buttongroup) {

    const classes = {
        'spectrum-ButtonGroup--vertical': this.vertical,
    }

    return html`
        <div class="spectrum-ButtonGroup ${classMap(classes)}" @click="${this.handleClick}">
            <slot @slotchange="${this.handleSlotChange}"></slot>
        </div>
    `;
}
