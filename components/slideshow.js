import styles from "../styles/Slideshow.module.css";
import common from "../styles/Common.module.css";
import Slide from "./slide";
import React, { useState } from "react";

export default function Slideshow() {
    // max ratio for slide (including all images) = 1.8 : 1
    const slideData = [
        [
            {
                src: "/Slideshow_Fan.jpg",
                alt: "Fan in need of conservation",
            },
        ],
        [
            {
                src: "/Slideshow_ShoeStorageDissertation_Ballet.jpg",
                alt: "Ballet shoes in an external storage mount",
            },
            {
                src: "/Slideshow_ShoeStorageDissertation.jpg",
                alt: "Heeled boots in an external storage mount",
            },
        ],
    ];

    const slides = slideData.map((slide) => {
        return <Slide imageData={slide} />;
    });

    const [slideIndex, setSlideIndex] = useState(0);

    const [currentSlide, setCurrentSlide] = useState(slides[slideIndex]);

    function selectSlide(index) {
        setCurrentSlide(slides[index]);

        setSlideIndex(index);
    }

    function nextSlide() {
        if (slideIndex === slideData.length - 1) {
            selectSlide(0);
        } else {
            selectSlide(slideIndex + 1);
        }
    }

    function prevSlide() {
        if (slideIndex === 0) {
            selectSlide(slideData.length - 1);
        } else {
            selectSlide(slideIndex - 1);
        }
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={prevSlide}>
                <div className={styles.prev}></div>
            </button>
            {currentSlide}
            <button className={styles.button} onClick={nextSlide}>
                <div className={styles.next}></div>
            </button>
        </div>
    );
}
