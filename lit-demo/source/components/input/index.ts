import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('x-input')
export class Input extends LitElement {
  @property()
  value?: string | number
  maxLength?: number
  height?: string | number
  placeholder?: string
  disabled?: boolean
  bordered?: boolean

  private onChange(event: InputEvent) {
    console.log(event)
    event.preventDefault()
  }

  protected render() {
    return html`
      <input
        value=${this.value}
        @input=${this.onChange}
        @change=${this.onChange}
      />
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
    'x-input': Input
  }
}
