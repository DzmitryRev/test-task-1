import {Slide} from "../Slide/Slide";
import {ISlide} from "../index";


export class Slider {
    slides: Slide[]
    currentSlide: Slide | null;
    constructor(slides: ISlide[]) {
        this.slides = slides.map(slide => new Slide(slide));
        this.currentSlide = this.slides[0] || null;
        this.createTemplate();
    }
    nextSlide() {
        this.currentSlide = null
    }
    previousSlide() {
        this.currentSlide = null
    }
    createTemplate() {
        const container = document.createElement("div");
        container.classList.add("slider");
        const title = document.createElement("h1");
        title.classList.add("slider__title");
        title.innerText = "Кейсы";
        const info = document.createElement("div");
        info.classList.add("slider__info")
        const laptop = document.createElement("div");
        laptop.classList.add("slider__laptop");
    }

}
