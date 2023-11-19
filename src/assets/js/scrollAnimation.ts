// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function () {
//         navigator.serviceWorker.register('/sw.js').then(function (registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }, function (err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }

import { onMounted, onUnmounted } from "vue";

export function useScrollAnimation() {
    const animationClass = "js-animated";
    const showScrollClass = "u-show-v-scroll";
    const getShowElements = () =>
        document.getElementsByClassName(showScrollClass);
    const getAnimatedElements = () =>
        document.getElementsByClassName(animationClass);
    const getElementBCR = (element: Element) => element.getBoundingClientRect();
    const getViewportWidth = () =>
        window.innerWidth || document.documentElement.clientWidth;
    const getViewportHeight = () =>
        window.innerHeight || document.documentElement.clientHeight;
    const isElementInViewport = (element: Element) => {
        const bounding = getElementBCR(element);
        //What area of image should be ignored;
        const scanFactor = 0.8;
        if (
            bounding.top + scanFactor * bounding.height >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= getViewportWidth() &&
            bounding.bottom - scanFactor * bounding.height <=
                getViewportHeight()
        ) {
            return true;
        } else {
            return false;
        }
    };
    const removeAnimationClass = (el: Element) => {
        el.classList.remove(animationClass);
    };
    const addAnimationClass = (el: Element) => {
        el.classList.add(animationClass);
    };
    const prepAnimatedElements = (collection: HTMLCollectionOf<Element>) => {
        for (let el of loopCollection(collection)) {
            addAnimationClass(el);
        }
    };
    const handleAnimatedElements = (collection: HTMLCollectionOf<Element>) => {
        for (let el of loopCollection(collection)) {
            if (isElementInViewport(el)) {
                removeAnimationClass(el);
            }
        }
    };
    //HTMLCollections are live, this returns passive array
    const loopCollection = (collection: HTMLCollectionOf<Element>) => {
        return Array.from(collection);
    };

    //Tiny throttle script
    function throttle(func: (...args: any[]) => void, wait = 100) {
        let timer: any = null;
        return function (...args: any[]) {
            if (timer === null) {
                timer = setTimeout(() => {
                    //@ts-ignore
                    func.apply(this, args);
                    timer = null;
                }, wait);
            }
        };
    }

    function animationSetup() {
        const showScrollElements = getShowElements();
        prepAnimatedElements(showScrollElements);
        const animatedElements = getAnimatedElements();
        handleAnimatedElements(animatedElements);
        document.addEventListener(
            "scroll",
            throttle(() => {
                handleAnimatedElements(animatedElements);
            }, 50)
        );
    }

    onMounted(() => {
        console.log("mounted");
        document.addEventListener("DOMContentLoaded", animationSetup);
    });

    onUnmounted(() => {
        document.addEventListener("DOMContentLoaded", animationSetup);
    });
}
