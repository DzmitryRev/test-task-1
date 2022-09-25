import {ISlide} from "../index";
import {Bubble} from "../Bubble/Bubble";


export class Slider {
    root: HTMLElement
    slides: ISlide[]
    container: HTMLDivElement;
    currentSlide: ISlide | null;
    prevSlide: ISlide | null;
    currentSlideIndex: number;
    infoTitle: HTMLHeadingElement;
    infoP: HTMLParagraphElement;
    caseImg: HTMLImageElement;
    infoNextBtn: HTMLButtonElement;
    infoPrevBtn: HTMLButtonElement;
    directionEl: HTMLParagraphElement;
    industryEl: HTMLParagraphElement;
    typeEl: HTMLParagraphElement;
    bubbles: HTMLDivElement[];
    constructor(root: HTMLElement,slides: ISlide[]) {
        this.root = root;
        this.slides = slides;
        this.currentSlideIndex = 0;
        this.currentSlide = this.slides[this.currentSlideIndex] || null;
        this.prevSlide = null;
        this.createTemplate();
    }
    nextSlide() {
        this.bubbles.forEach(item => {
            const itemPos = item.getBoundingClientRect()
            item.animate([
                {left: itemPos.left + "px"},
                {left: -500 + "px"},
                {left: itemPos.left + "px"}
            ], {
                duration: 1500,
                fill: "forwards"
            })
        })
        this.currentSlideIndex = this.slides[this.currentSlideIndex + 1] ? this.currentSlideIndex + 1 : 0;
        this.prevSlide = this.currentSlide;
        this.currentSlide = this.slides[this.currentSlideIndex];
        this.render();
    }

    previousSlide() {
        this.currentSlideIndex = this.currentSlideIndex === 0 ? this.slides.length - 1 : this.currentSlideIndex - 1;
        this.prevSlide = this.currentSlide;
        this.currentSlide = this.slides[this.currentSlideIndex];
        this.render();
    }
    createTemplate() {
        this.root.innerHTML = "";
        const container = document.createElement("div");
        this.container = container;
        container.classList.add("slider");
        container.style.backgroundColor = this.currentSlide.color;
        const title = document.createElement("h1");
        title.classList.add("slider__title");
        title.innerText = "Кейсы";
        const info = document.createElement("div");
        info.classList.add("slider__info");
        const infoTitle = document.createElement("h2");
        infoTitle.classList.add("info-title");
        this.infoTitle = infoTitle;
        const infoP = document.createElement("p");
        infoP.classList.add("info-p");
        this.infoP = infoP;
        this.infoPrevBtn = document.createElement("button");
        const arrow = document.createElement("img");
        // arrow.src = "../assets/arr.png"
        // this.infoPrevBtn.insertAdjacentElement("beforeend", arrow)
        this.infoPrevBtn.innerText = "Prev";
        this.infoNextBtn = document.createElement("button");
        this.infoNextBtn.innerText = "Next";
        const img = document.createElement("img");
        img.classList.add("slider__laptop-img");
        const caseImg = document.createElement("img");
        this.caseImg = caseImg;
        caseImg.classList.add("slider__case-img")
        img.src = "../assets/laptop.png"
        const laptop = document.createElement("div");
        laptop.classList.add("slider__laptop");
        const btnContainer = document.createElement("div");
        const bottomContainer = document.createElement("div");
        bottomContainer.classList.add("bottom-container");
        this.directionEl = document.createElement("p");
        this.directionEl.classList.add("bottom-container__text");
        this.typeEl = document.createElement("p");
        this.typeEl.classList.add("bottom-container__text");
        this.industryEl = document.createElement("p");
        this.industryEl.classList.add("bottom-container__text");
        const directionContainer = document.createElement("div");
        directionContainer.classList.add("bottom-container__block");
        const directionTitle = document.createElement("p")
        directionTitle.classList.add("bottom-container__title");
        directionTitle.innerText = "Направление";
        directionContainer.insertAdjacentElement("beforeend", directionTitle)
        directionContainer.insertAdjacentElement("beforeend", this.directionEl)
        const typeContainer = document.createElement("div");
        typeContainer.classList.add("bottom-container__block");
        const typeTitle = document.createElement("p");
        typeTitle.classList.add("bottom-container__title");
        typeTitle.innerText = "Тип проекта";
        typeContainer.insertAdjacentElement("beforeend", typeTitle)
        typeContainer.insertAdjacentElement("beforeend", this.typeEl)
        const industryContainer = document.createElement("div");
        industryContainer.classList.add("bottom-container__block");
        const industryTitle = document.createElement("p");
        industryTitle.classList.add("bottom-container__title");
        industryTitle.innerText = "Отрасль";
        this.createBubbles(container);
        industryContainer.insertAdjacentElement("beforeend", industryTitle);
        industryContainer.insertAdjacentElement("beforeend", this.industryEl);
        bottomContainer.insertAdjacentElement("beforeend", directionContainer);
        bottomContainer.insertAdjacentElement("beforeend", typeContainer);
        bottomContainer.insertAdjacentElement("beforeend", industryContainer);
        btnContainer.insertAdjacentElement("beforeend", this.infoPrevBtn);
        btnContainer.insertAdjacentElement("beforeend", this.infoNextBtn);
        info.insertAdjacentElement("beforeend", infoTitle);
        info.insertAdjacentElement("beforeend", infoP);
        info.insertAdjacentElement("beforeend", btnContainer);
        info.insertAdjacentElement("beforeend", bottomContainer);
        laptop.insertAdjacentElement("beforeend", img);
        laptop.insertAdjacentElement("beforeend", caseImg);
        container.insertAdjacentElement("beforeend", title);
        container.insertAdjacentElement("beforeend", laptop);
        container.insertAdjacentElement("beforeend", info);

        this.root.insertAdjacentElement("beforeend", container);
        this.infoPrevBtn.addEventListener("click", () => {
            this.previousSlide();
        })
        this.infoNextBtn.addEventListener("click", () => {
            this.nextSlide();
        })
        this.render();
    }

    createBubbles(root: HTMLElement) {
        const small = document.createElement("div");
        small.classList.add("slider__bubble_small");
        small.classList.add("slider__bubble");
        small.style.bottom = 10 + "px";
        small.style.left = 20 + "px";
        const medium = document.createElement("div");
        medium.classList.add("slider__bubble_medium")
        medium.classList.add("slider__bubble");
        medium.style.top = -20 + "px";
        medium.style.left = 300 + "px";
        const big = document.createElement("div");
        big.classList.add("slider__bubble_big")
        big.classList.add("slider__bubble");
        big.style.bottom = -20 + "px";
        big.style.right = 10 + "px";
        root.insertAdjacentElement("beforeend", small);
        root.insertAdjacentElement("beforeend", medium);
        root.insertAdjacentElement("beforeend", big);
        this.bubbles = [small, medium, big];
    }

    render() {
        this.container.animate([
            { background: this.prevSlide?.color ||  "white"},
            { background: this.currentSlide.color }
        ], {
            duration: 1500,
            fill: "forwards"
        });
        this.caseImg.src = this.currentSlide.img;
        this.caseImg.animate([
            {opacity: 0},
            {opacity: 1}
        ], {
            duration: 1500,
            fill: "forwards"
        } )
        this.infoP.innerText = this.currentSlide.goal;
        this.infoTitle.innerText = this.currentSlide.title;
        this.directionEl.innerText = this.currentSlide.direction;
        this.typeEl.innerText = this.currentSlide.type;
        this.industryEl.innerText = this.currentSlide.industry;
        this.bubbles.forEach(item => {
            new Bubble(item);
        })
    }

}
