import { html } from 'lit-element';
import { DemoButtongroup } from './demo-buttongroup.component';

import '@spectrum/sp-button';
import '@spectrum/sp-buttongroup';
import '@spectrum/sp-container';
import '@spectrum/sp-demo';


export default function template(this: DemoButtongroup) {
  return html`

<sp-container>

<sp-rule medium label="Button Group - Horizontal"></sp-rule>

<sp-demo width="400">
  <pre><sp-buttongroup>
    <sp-button type="action" label="Button 1" selected></sp-button>
    <sp-button type="action" label="Button 2"></sp-button>
    <sp-button type="action" label="Button 3"></sp-button>
    <sp-button type="action" label="Disabled" disabled></sp-button>
  </sp-buttongroup></pre>
</sp-demo>

<sp-demo width="400">
  <pre><sp-buttongroup>
    <sp-button type="action" icon="Edit" selected></sp-button>
    <sp-button type="action" icon="Copy"></sp-button>
    <sp-button type="action" icon="Delete"></sp-button>
    <sp-button type="action" icon="Asterisk" disabled></sp-button>
  </sp-buttongroup></pre>
</sp-demo>

<sp-demo width="400">
  <pre><sp-buttongroup>
    <sp-button quiet type="action" label="Button 1" selected></sp-button>
    <sp-button quiet type="action" label="Button 2"></sp-button>
    <sp-button quiet type="action" label="Button 3"></sp-button>
    <sp-button quiet type="action" label="Disabled" disabled></sp-button>
</sp-buttongroup></pre>
</sp-demo>

<sp-demo width="400">
  <pre><sp-buttongroup>
    <sp-button quiet type="action" icon="Edit" selected></sp-button>
    <sp-button quiet type="action" icon="Copy"></sp-button>
    <sp-button quiet type="action" icon="Delete"></sp-button>
    <sp-button quiet type="action" icon="Asterisk" disabled></sp-button>
  </sp-buttongroup></pre>
</sp-demo>

<sp-demo width="400">
  <pre><sp-buttongroup>
  <sp-button type="tool" icon="Edit" selected></sp-button>
  <sp-button type="tool" icon="Copy"></sp-button>
  <sp-button type="tool" icon="Delete"></sp-button>
  <sp-button type="tool" icon="Asterisk"></sp-button>
</sp-buttongroup></pre>
</sp-demo>



<sp-rule medium label="Button Group - Vertical"></sp-rule>

<sp-demo width="400">
  <pre><sp-buttongroup vertical>
  <sp-button type="action" label="Normal"></sp-button>
  <sp-button type="action" label="Selected" selected></sp-button>
  <sp-button type="action" label="Disabled" disabled></sp-button>
  <sp-button type="action" label="Disabled Selected" disabled selected></sp-button>
</sp-buttongroup></pre>
</sp-demo>

<sp-demo width="400">
  <pre><sp-buttongroup vertical>
  <sp-button type="action" label="Properties" icon="Properties" quiet selected></sp-button>
  <sp-button type="action" label="Info" icon="infoSmall" quiet></sp-button>
  <sp-button type="action" label="Keywords" icon="ViewAllTags" quiet></sp-button>
</sp-buttongroup></pre>
</sp-demo>

<sp-demo width="400">
  <pre><sp-buttongroup vertical>
  <sp-button type="action" icon="Delete"></sp-button>
  <sp-button type="action" icon="Delete" selected></sp-button>
  <sp-button type="action" icon="Delete" disabled></sp-button>
  <sp-button type="action" icon="Delete" disabled selected></sp-button>
</sp-buttongroup></pre>
</sp-demo>

<sp-demo width="400">
  <pre><sp-buttongroup vertical>
  <sp-button type="action" icon="Delete" quiet></sp-button>
  <sp-button type="action" icon="Delete" quiet selected></sp-button>
  <sp-button type="action" icon="Delete" quiet disabled></sp-button>
  <sp-button type="action" icon="Delete" quiet disabled selected></sp-button>
</sp-buttongroup></pre>
</sp-demo>

<sp-demo width="400">
  <pre><sp-buttongroup vertical>
  <sp-button type="tool" icon="Brush"></sp-button>
  <sp-button type="tool" icon="Select" selected></sp-button>
  <sp-button type="tool" icon="Select" disabled></sp-button>
  <sp-button type="tool" icon="Select" disabled selected></sp-button> 
</sp-buttongroup></pre>
</sp-demo>
</sp-container>
  `;
  
}
