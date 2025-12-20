import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

export interface ButtonProps {
  type?: '' | 'primary' | 'text' | 'link'
  shape?: '' | 'circle' | 'round'
  danger?: boolean
  disabled?: boolean
  loading?: boolean
  htmlType?: HTMLButtonElement['type']
}

@customElement('x-button')
export class Button extends LitElement {
  constructor() {
    super()
    this.addEventListener('click', this.onClick)
  }

  @property()
  type?: ButtonProps['type']

  @property({ type: Boolean })
  danger?: ButtonProps['danger']

  @property({ type: Boolean })
  disabled?: ButtonProps['disabled']

  @property({ type: Boolean })
  loading?: ButtonProps['loading']

  @property()
  shape?: ButtonProps['shape']

  @property({
    attribute: 'html-type',
  })
  htmlType?: ButtonProps['htmlType']

  private onClick() {
    const form = this.closest('form')
    if (this.htmlType === 'submit') {
      form?.dispatchEvent(new SubmitEvent('submit'))
    } else if (this.htmlType === 'reset') {
      form?.dispatchEvent(new Event('reset'))
    }
  }

  protected render() {
    return html`
      <slot />
    `
  }

  static styles = css`
    :host {
      display: inline-block;

      cursor: pointer;
      user-select: none;

      text-align: center;
      font: 14px / 22px '';
      padding: 3px 15px;

      background: #fff;
      border-color: #d9d9d9;
      border-radius: 2px;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
      border: 1px solid #d9d9d9;
      transition: all 0.3s;
    }
    :host(:hover) {
      color: #4096ff;
      border-color: #4096ff;
    }
    :host(:active) {
      color: #0958d9;
      border-color: #0958d9;
    }
    :host([danger]) {
      color: #ff4d4f;
      border-color: #ff4d4f;
      box-shadow: 0 2px 0 rgba(255, 38, 5, 0.06);
    }
    :host([danger]:hover) {
      color: #ff7875;
      border-color: #ffa39e;
    }
    :host([danger]:active) {
      color: #d9363e;
      border-color: #d9363e;
    }
    :host([type='primary']) {
      color: #fff;
      background: #1677ff;
      border-color: #1677ff;
    }
    :host([type='primary']:hover) {
      color: #fff;
      background: #4096ff;
    }
    :host([type='primary']:active) {
      color: #fff;
      background: #0958d9;
    }
    :host([type='primary'][danger]) {
      color: #fff;
      background: #ff4d4f;
      border-color: #ff4d4f;
      box-shadow: 0 2px 0 rgba(255, 38, 5, 0.06);
    }
    :host([type='primary'][danger]:hover) {
      color: #fff;
      background: #ff7875;
    }
    :host([type='primary'][danger]:active) {
      color: #fff;
      background: #d9363e;
    }
    :host([type='text']) {
      display: inline;
      color: #333;
      border-color: transparent;
      box-shadow: none;
    }
    :host([type='text']:hover) {
      background: rgba(0, 0, 0, 0.06);
    }
    :host([type='text']:active) {
      background: rgba(0, 0, 0, 0.15);
    }
    :host([type='link']) {
      color: #1677ff;
    }
    :host([type='link']:hover) {
      color: #69b1ff;
    }
    :host([type='link']:active) {
      color: #0958d9;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'x-button': Button
  }
}
