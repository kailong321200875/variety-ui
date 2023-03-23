import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'view-timer',
  styleUrl: 'timer.scss',
  shadow: true,
})
export class Timer {
  @Prop() duration: number = 60;

  @State() private end: number | null = null;

  @State() private remaining: number = 0;

  render() {
    const { remaining, running } = this;
    const min = Math.floor(remaining / 60000);
    const sec = pad(min, Math.floor((remaining / 1000) % 60));
    const hun = pad(true, Math.floor((remaining % 1000) / 10));

    return (
      <div>
        {min ? `${min}:${sec}` : `${sec}.${hun}`}
        <footer>{remaining === 0 ? '' : running ? <span onClick={() => this.pause()}>暂停</span> : <span onClick={() => this.start()}>开始/继续</span>}</footer>
      </div>
    );
  }

  private start() {
    this.end = Date.now() + this.remaining;
    this.tick();
  }

  private pause() {
    this.end = null;
  }

  private reset() {
    const running = this.running;
    this.remaining = this.duration * 1000;
    this.end = running ? Date.now() + this.remaining : null;
  }

  private tick() {
    if (this.running) {
      this.remaining = Math.max(0, this.end! - Date.now());
      requestAnimationFrame(() => this.tick());
    }
  }

  get running() {
    return this.end && this.remaining;
  }

  connectedCallback() {
    this.reset();
  }
}

function pad(pad: unknown, val: number) {
  return pad ? String(val).padStart(2, '0') : val;
}
