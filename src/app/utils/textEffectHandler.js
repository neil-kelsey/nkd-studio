import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin, but only if `window` is defined (client-side only)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initializeTextEffect(
    textRef,
    startingOpacity,
    trigger
){
  // Check that gsap is available in the client environment
  if (!textRef?.current || typeof gsap === "undefined") return;

  const textElement = textRef.current;

  // Split the text content into words instead of individual characters
  const words = textElement.textContent.split(" ").map((word) => {
    const wordSpan = document.createElement("span");
    wordSpan.style.display = "inline-block";
    wordSpan.style.opacity = startingOpacity;

    word.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      wordSpan.appendChild(charSpan);
    });

    return wordSpan;
  });

  // Clear original text and append word spans
  textElement.innerHTML = "";
  words.forEach((wordSpan, i) => {
    textElement.appendChild(wordSpan);
    if (i < words.length - 1) {
      textElement.appendChild(document.createTextNode(" "));
    }
  });

  // GSAP animation with ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top top",
      end: "+=80%",
      pin: true,
      scrub: 0.75,
      markers: true,
    },
  });

  tl.to(
    words,
    {
      opacity: 1,
      stagger: 0.1,
    },
    0.1
  );

  // Return a cleanup function to remove ScrollTrigger on unmount
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
