import {ISlide} from "../index";


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
    constructor(root: HTMLElement,slides: ISlide[]) {
        this.root = root;
        this.slides = slides;
        this.currentSlideIndex = 0;
        this.currentSlide = this.slides[this.currentSlideIndex] || null;
        this.prevSlide = null;
        this.createTemplate();
    }
    nextSlide() {
        this.currentSlideIndex = this.slides[this.currentSlideIndex + 1] ? this.currentSlideIndex + 1 : 0;
        this.prevSlide = this.currentSlide;
        this.currentSlide = this.slides[this.currentSlideIndex];
        this.changeSlide();
        this.render();
    }
    changeSlide() {
        this.container.animate([
            { background: this.prevSlide.color || "white"},
            { background: this.currentSlide.color }
        ], {
            duration: 600,
            fill: "forwards"
        });
        this.caseImg.src = this.currentSlide.img;
    }


    previousSlide() {
        this.currentSlideIndex = this.currentSlideIndex === 0 ? this.slides.length - 1 : this.currentSlideIndex - 1;
        this.currentSlide = this.slides[this.currentSlideIndex]
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
        arrow.src = "../assets/arr.png"
        this.infoPrevBtn.insertAdjacentElement("beforeend", arrow)
        this.infoNextBtn = document.createElement("button");
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
        info.addEventListener("click", () => {
            this.nextSlide();
        })
        this.render();
    }

    render() {
        // this.caseImg.animate([
        //     {opacity: 1},
        //     {opacity: 0}
        // ], {
        //     duration: 600,
        //     fill: "forwards"
        // } )
        this.caseImg.src = this.currentSlide.img;
        // this.caseImg.animate([
        //     {opacity: 0},
        //     {opacity: 1}
        // ], {
        //     duration: 1000,
        //     fill: "forwards"
        // } )

        console.log(this.currentSlide)
        this.infoP.innerText = this.currentSlide.goal;
        this.infoTitle.innerText = this.currentSlide.title;
        this.directionEl.innerText = this.currentSlide.direction;
        this.typeEl.innerText = this.currentSlide.type;
        this.industryEl.innerText = this.currentSlide.industry;
    }

}
