import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('x-avatar')
export class Avatar extends LitElement {
  src?: string

  shape?: 'circle' | 'square'

  size?: number

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
    'x-avatar': Avatar
  }
}
