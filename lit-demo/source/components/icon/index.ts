import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('x-icon')
export class Icon extends LitElement {
  name?: string
  spin?: boolean

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
    'x-icon': Icon
  }
}
