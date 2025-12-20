import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('x-image')
export class Image extends LitElement {
  src?: string
  width?: string | number
  height?: string | number
  placeholder?: string
  preview?: boolean
  lazy?: boolean
  fallback?: string

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
    'x-image': Image
  }
}
