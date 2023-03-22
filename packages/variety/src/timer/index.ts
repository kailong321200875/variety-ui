import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("view-timer")
class ViewTimer extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      min-width: 4em;
      text-align: center;
      padding: 0.2em;
      margin: 0.2em 0.1em;
    }
    footer {
      user-select: none;
      font-size: 0.6em;
    }
  `;

  @property()
  duration = 60;

  @state()
  private end: number | null = null;

  @state()
  private remaining = 0;

  @state()
  private count = 0;

  render() {
    const { remaining, running } = this;
    const min = Math.floor(remaining / 60000);
    const sec = pad(min, Math.floor((remaining / 1000) % 60));
    const hun = pad(true, Math.floor((remaining % 1000) / 10));

    return html`
      ${this.count} ${min ? `${min}:${sec}` : `${sec}.${hun}`}
      <footer>
        ${remaining === 0
          ? ""
          : running
          ? html`<span @click=${this.pause}>暂停</span>`
          : html`<span @click=${this.start}>开始/继续</span>`}
        <span @click=${this.reset}>重置</span>
      </footer>
    `;
  }

  start() {
    this.count++;
    console.log(this.count);
    this.end = Date.now() + this.remaining;
    this.tick();
  }

  pause() {
    this.end = null;
  }

  reset() {
    const running = this.running;
    this.remaining = this.duration * 1000;
    this.end = running ? Date.now() + this.remaining : null;
  }

  tick() {
    if (this.running) {
      this.remaining = Math.max(0, this.end! - Date.now());
      requestAnimationFrame(() => this.tick());
    }
  }

  get running() {
    return this.end && this.remaining;
  }

  connectedCallback() {
    super.connectedCallback();
    this.reset();
  }
}

function pad(pad: unknown, val: number) {
  return pad ? String(val).padStart(2, "0") : val;
}

export default ViewTimer;
