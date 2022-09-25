

export interface ISlide {

}

export class Slider {
    slides: ISlide[]
    currentSlide: ISlide | null;
    constructor(slides: ISlide[]) {
        this.slides = slides;
        this.currentSlide = slides[0] || null;
    }
    nextSlide() {
        this.currentSlide = null
    }
    previousSlide() {
        this.currentSlide = null
    }

}
