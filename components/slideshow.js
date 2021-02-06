import styles from "../styles/Slideshow.module.css";
import common from "../styles/Common.module.css";
import Slide from "./slide";
import React, { useState } from "react";

export default function Slideshow() {
    const slideData = [
        {
            src: "/Slideshow_Fan.jpg",
            alt: "Fan in need of conservation",
        },
        {
            src: "/Slideshow_ShoeStorageDissertation_Prada.jpg",
            alt: "Prada shoes in an external storage mount",
        },
        {
            src: "/Slideshow_ShoeStorageDissertation.jpg",
            alt: "Heeled boots in an external storage mount",
        },
    ];

    const slides = slideData.map((slide) => {
        return <Slide src={slide.src} alt={slide.alt} />;
    });

    const [slideIndex, setSlideIndex] = useState(0);

    const [currentSlide, setCurrentSlide] = useState(slides[slideIndex]);

    function selectSlide(index) {
        setCurrentSlide(slides[index]);

        setSlideIndex(index);
    }

    function nextSlide() {
        if (slideIndex === slideData.length - 1) return;

        selectSlide(slideIndex + 1);
    }

    function prevSlide() {
        if (slideIndex === 0) return;

        selectSlide(slideIndex - 1);
    }

    return (
        <div className={styles.container}>
            <button className={styles.prev} onClick={prevSlide}>
                &#10094;
            </button>
            {currentSlide}
            <button className={styles.next} onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
}
