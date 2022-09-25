import {Slider} from "./Slider/Slider";
import "./styles/index.scss";
import "./assets/laptop.png";
import "./assets/case-1.png";
import "./assets/case-2.png";

export interface ISlide {
    title: string;
    goal: string;
    type: string;
    industry: string;
    direction: string;
    color: string;
    img: string;
}

export const slides: ISlide[] = [
    {
        title: "Создание корпоротивного сайта для холдинга 'АМКОДОР'",
        goal: "Разработать и запустить корпоротивный сайт для холдинка 'АМКОДОР' для развития сети на рынках Беларуси и стран СНГ.",
        type: "Корпоротивные сайты",
        direction: "WEB разработка",
        industry: "Производство",
        color: "#8DBDBA",
        img: "./assets/case-2.png"
    },
    {
        title: "Создание маркетплейса для бизнеса по перепродаже одежды",
        goal: "Brands&Charity — благотворительная онлайн — платформа для перепродажи брендовых вещей, цель которой превратить ненужные одним людям вещи в полезный ресурс для других.",
        type: "Интернет-магазины ",
        direction: "WEB разработка",
        industry: "Торговля",
        color: "#8675BA",
        img: "./assets/case-1.png"
    }
]

const root = document.querySelector("#slider") as HTMLElement;

new Slider(root, slides)