import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childrenRaf, callback) {
   const observer = useRef();

   useEffect(() => {

      const options = {
         root: parentRef.current,
         rootMargin: "0px",
         threshold: 0,
      };

      observer.current = new IntersectionObserver(([target]) => {
         if (target.isIntersecting) {
            console.log('isIntersecting');

            callback();
         }
      }, options);

      observer.current.observe(childrenRaf.current)

      return function () {
         observer.current.unobserve(childrenRaf.current);
      };

   }, [callback]);

}