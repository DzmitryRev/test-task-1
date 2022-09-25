import {ISlide} from "../index";


export class Slide {
    slide: ISlide;
    constructor(slide: ISlide) {
        this.slide = slide;
    }

    createTemplate() {

        const title = document.createElement("h2");
        // add classname
        title.innerText = this.slide.title;
        const goal = document.createElement("p");
        // add classname
        goal.innerText = this.slide.goal;
    }
}