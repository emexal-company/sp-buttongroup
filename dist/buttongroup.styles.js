/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { css } from 'lit-element';
export default css `.spectrum-ButtonGroup{--spectrum-buttongroup-button-gap-x: var(--spectrum-global-dimension-static-size-200);--spectrum-actionbuttongroup-text-button-gap-x: var(--spectrum-global-dimension-size-100);--spectrum-toolgroup-text-button-gap-x: var(--spectrum-global-dimension-size-100);--spectrum-buttongroup-button-gap-y: var(--spectrum-global-dimension-static-size-200);--spectrum-actionbuttongroup-text-button-gap-y: var(--spectrum-global-dimension-size-100);--spectrum-toolgroup-text-button-gap-y: var(--spectrum-global-dimension-size-100)}.spectrum-ButtonGroup{display:-ms-flexbox;display:flex}.spectrum-ButtonGroup .spectrum-Button,.spectrum-ButtonGroup .spectrum-ActionButton,.spectrum-ButtonGroup .spectrum-Tool{-ms-flex-negative:0;flex-shrink:0}.spectrum-ButtonGroup>.spectrum-Rule--vertical{height:auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.spectrum-ButtonGroup .spectrum-Button+.spectrum-Button{margin-left:var(--spectrum-buttongroup-button-gap-x, var(--spectrum-global-dimension-static-size-200))}.spectrum-ButtonGroup .spectrum-ActionButton+.spectrum-ActionButton{margin-left:var(--spectrum-actionbuttongroup-text-button-gap-x, var(--spectrum-global-dimension-size-100))}.spectrum-ButtonGroup .spectrum-Tool+.spectrum-Tool{margin-left:var(--spectrum-toolgroup-text-button-gap-x, var(--spectrum-global-dimension-size-100))}.spectrum-ButtonGroup--vertical{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column}.spectrum-ButtonGroup--vertical .spectrum-ActionButton-label{-ms-flex-positive:1;flex-grow:1;text-align:left}.spectrum-ButtonGroup--vertical .spectrum-Button+.spectrum-Button{margin-top:var(--spectrum-buttongroup-button-gap-y, var(--spectrum-global-dimension-static-size-200));margin-left:0}.spectrum-ButtonGroup--vertical .spectrum-ActionButton+.spectrum-ActionButton{margin-top:var(--spectrum-actionbuttongroup-text-button-gap-y, var(--spectrum-global-dimension-size-100));margin-left:0}.spectrum-ButtonGroup--vertical .spectrum-Tool+.spectrum-Tool{margin-top:var(--spectrum-toolgroup-text-button-gap-y, var(--spectrum-global-dimension-size-100));margin-left:0}`;
//# sourceMappingURL=buttongroup.styles.js.map