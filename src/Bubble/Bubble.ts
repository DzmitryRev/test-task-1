export class Bubble {
    bubble: HTMLElement;
    centerX: number;
    centerY: number;
    mouseInside: boolean;
    mouseHasEntered: boolean;
    distance: number;
    a: number;
    xWalk: number;
    yWalk: number;

    constructor(bubble: HTMLElement) {
        this.bubble = bubble;
        this.distance = 250;
        this.a = 160;
        this.mouseHasEntered = false;
        this.mouseInside = false;
        this.init();
        this.initEvents();
    }

    init() {
        let {
            width,
            height,
            x: centerX,
            y: centerY
        } = this.bubble.getBoundingClientRect();
        this.centerX = centerX + width / 2;
        this.centerY = centerY + height / 2;
    }

    initEvents() {
        window.addEventListener('mousemove', (e) => this.move(e));
        window.addEventListener('mouseout', () => this.reset())
        window.addEventListener('scroll', () => this.init());
    }

    move(e: MouseEvent) {
        const x = e.x;
        const y = e.y;

        const leftBorderLine = this.centerX - this.distance;
        const rightBorderLine = this.centerX + this.distance;
        const topBorderLine = this.centerY - this.distance;
        const bottomBorderline = this.centerY + this.distance;
        this.xWalk = (x - this.centerX) / 2;
        this.yWalk = (y - this.centerY) / 2;

        this.mouseInside =
            x > leftBorderLine &&
            x < rightBorderLine &&
            y > topBorderLine &&
            y < bottomBorderline;


        if (this.mouseInside) {
            if (!this.mouseHasEntered) {
                this.distance = 250;
                this.mouseHasEntered = true;
            }
            this.catch();
        } else {
            this.reset()
        }
    }

    catch() {
        this.bubble.style.transform = `translate(${this.xWalk}px, ${this.yWalk}px)`;
    }

    reset() {
        this.bubble.style.transform = `translate(${0}px, ${0}px)`;
        if (this.mouseHasEntered) this.distance = 250;
        this.mouseHasEntered = false;
    }


}