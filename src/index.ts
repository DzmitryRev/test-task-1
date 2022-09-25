import {Slider} from "./Slider/Slider";


export interface ISlide {
    title: string;
    goal: string;
    type: string;
    industry: string;
    direction: string;
    img: string;
}

export const slides: ISlide[] = [
    {
        title: "Создание корпоротивного сайта для холдинга 'АМКОДОР'",
        goal: "Разработать и запустить корпоротивный сайт для холдинка 'АМКОДОР' для развития сети на рынках Беларуси и стран СНГ",
        type: "Корпоротивные сайты",
        direction: "WEB разработка",
        industry: "Производство, Торговля",
        img: ""
    },
    {
        title: "Создание маркетплейса для бизнеса по перепродаже одежды",
        goal: "Brands&Charity — благотворительная онлайн — платформа для перепродажи брендовых вещей, цель которой превратить ненужные одним людям вещи в полезный ресурс для других.",
        type: "Интернет-магазины ",
        direction: "WEB разработка",
        industry: "Торговля",
        img: ""
    }
]


