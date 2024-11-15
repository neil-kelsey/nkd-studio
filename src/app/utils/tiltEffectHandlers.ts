import { useEffect } from "react";

export const tiltEffectSettings = {
  max: 5,
  perspective: 1000,
  scale: 1,
  speed: 500,
  easing: "cubic-bezier(.03,.98,.52,.99)"
};

export function cardMouseEnter(event: any) {
  setTransition(event);
}

export function cardMouseMove(event: any) {
  const card = event.currentTarget;
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + cardWidth / 2;
  const centerY = rect.top + cardHeight / 2;
  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;
  const rotateXUncapped = (+1) * tiltEffectSettings.max * mouseY / (cardHeight / 2);
  const rotateYUncapped = (-1) * tiltEffectSettings.max * mouseX / (cardWidth / 2);
  const rotateX = Math.min(Math.max(rotateXUncapped, -tiltEffectSettings.max), tiltEffectSettings.max);
  const rotateY = Math.min(Math.max(rotateYUncapped, -tiltEffectSettings.max), tiltEffectSettings.max);

  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                          scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}

export function cardMouseLeave(event: any) {
  event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  setTransition(event);
}

function setTransition(event: any) {
  const card = event.currentTarget;
  clearTimeout(card.transitionTimeoutId);
  card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
  card.transitionTimeoutId = setTimeout(() => {
    card.style.transition = "";
  }, tiltEffectSettings.speed);
}

export function useTiltEffect() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      card.addEventListener("mouseenter", cardMouseEnter);
      card.addEventListener("mousemove", cardMouseMove);
      card.addEventListener("mouseleave", cardMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("mouseenter", cardMouseEnter);
        card.removeEventListener("mousemove", cardMouseMove);
        card.removeEventListener("mouseleave", cardMouseLeave);
      });
    };
  }, []);
}
