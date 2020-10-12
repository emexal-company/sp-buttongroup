import { customElement, property, query } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import { Button } from '@spectrum/sp-button';

import labelStyles from './buttongroup.styles';
import standardTemplate from './buttongroup.template';
import { StringDecoder } from 'string_decoder';

@customElement('sp-buttongroup')
export class Buttongroup extends Base {
  public static componentStyles = labelStyles;

  @property({ type: Boolean }) public vertical: boolean = false;
  @query('slot') protected buttons!: HTMLElement;

  protected render() {
    return standardTemplate.call(this);
  }

  protected getButtons(): Button[] {
    return (this.buttons as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: Node) => e instanceof Button) as any as Button[];
  }

  protected handleSlotChange() {
    if (this.buttons) {
      this.getButtons().slice(1).forEach((b: Button) => b.style.marginLeft = 'var(--spectrum-actionbuttongroup-text-button-gap-x, var(--spectrum-global-dimension-size-100))');
    }
  }

  protected handleClick(e: MouseEvent) {
    const clickedButtons = e.composedPath().filter((t: EventTarget) => t instanceof Button) as any as Button[];
    if ((clickedButtons.length === 1) && (!clickedButtons[0].disabled)) {
      this.getButtons().forEach((b) => b.selected = (b === clickedButtons[0]));
    }
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'sp-buttongroup': Buttongroup;
  }
}
