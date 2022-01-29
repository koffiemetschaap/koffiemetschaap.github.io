if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

(function(){
    const animationClass = 'is-animated';
    const showScrollClass = 'u-show-v-scroll';
    const getShowElements = () => document.getElementsByClassName(showScrollClass);
    const getAnimatedElements = () => document.getElementsByClassName(animationClass);
    const getElementBCR = element => element.getBoundingClientRect();
    const getViewportWidth = () => (window.innerWidth || document.documentElement.clientWidth)
    const getViewportHeight = () => (window.innerHeight || document.documentElement.clientHeight)
    const isElementInViewport = element => {
        const bounding = getElementBCR(element);
        //What area of image should be ignored;
        const scanFactor = 0.95;
        if(
            (bounding.top + (scanFactor * bounding.height)) >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= getViewportWidth() &&
            (bounding.bottom - (scanFactor * bounding.height)) <= getViewportHeight()
        ) {
            return true;
        } else {
            return false;
        }
    }
    const removeAnimationClass = el => {
        el.classList.remove(animationClass);
    }
    const addAnimationClass = el => {
        el.classList.add(animationClass);
    }
    const prepAnimatedElements = collection => {
        for(let el of loopCollection(collection)) {
            addAnimationClass(el);
        }
    }
    const handleAnimatedElements = collection => {
        for(let el of loopCollection(collection)) {
            if(isElementInViewport(el)) {
                removeAnimationClass(el);
            }
        }
    }
    //HTMLCollections are live, this returns passive array
    const loopCollection = collection => {
        return Array.from(collection);
    }

    //Tiny debounce script
    const debounce = (callback, wait) => {
        let timeoutId = null;
        return (...args) => {
          window.clearTimeout(timeoutId);
          timeoutId = window.setTimeout(() => {
            callback.apply(null, args);
          }, wait);
        };
      }
    
    document.addEventListener('DOMContentLoaded', (event)=>{
        const showScrollElements = getShowElements();
        prepAnimatedElements(showScrollElements);
        const animatedElements = getAnimatedElements();
        handleAnimatedElements(animatedElements);
        document.addEventListener('scroll', debounce(
            ()=>{
                console.log('scroll');
                handleAnimatedElements(animatedElements);
            },
            50 
        ))
    })
}())