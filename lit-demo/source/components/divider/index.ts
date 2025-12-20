import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('x-divider')
export class Divider extends LitElement {
  type?: 'horizontal' | 'vertical'
  dashed?: boolean

  protected render() {
    return html`
      <div></div>
    `
  }

  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      user-select: none;
      text-align: center;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'x-divider': Divider
  }
}
