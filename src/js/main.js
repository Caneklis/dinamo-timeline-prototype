import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import Splitter from "split-html-to-chars";
import Swiper from "swiper";
import { Fancybox } from "@fancyapps/ui";
import "../components/scroll-lock/js/index";
import "../components/modals/js/index";

document.addEventListener("DOMContentLoaded", () => {
  let els = document.querySelectorAll("h1");
  [].forEach.call(els, function (el) {
    el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
  });

  let tl = gsap.timeline();

  tl.fromTo(
    ".shutter-up, .shutter-down",
    1,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
    },
    1
  )
    // .fromTo(
    //   '.shutter-down',
    //   {
    //     autoAlpha: 0,
    //   },
    //   {
    //     autoAlpha: 1,
    //   }
    // )
    .fromTo(
      ".shutter-up",
      1,
      {
        top: "50%",
      },
      {
        top: "15%",
        ease: "power1.out",
      },
      "start"
    )
    .fromTo(
      ".shutter-down",
      1,
      {
        bottom: "50%",
      },
      {
        bottom: "15%",
        ease: "power1.out",
      },
      "start"
    )
    .fromTo(
      ".center-line",
      1,
      {
        x: "-100%",
        autoAlpha: 0,
      },
      { x: 0, autoAlpha: 1, ease: "power1.out" }
    )
    .fromTo(
      ".swiper-wrapper",
      1,
      {
        autoAlpha: 0,
      },
      { autoAlpha: 1, ease: "power1.out" }
    )
    .fromTo(
      ".swiper-slide:nth-of-type(odd) .slide-vertical-line",
      {
        height: 0,
      },
      {
        height: "100%",
        ease: "power1.out",
      },
      "vetical-line"
    )
    .fromTo(
      ".swiper-slide:nth-of-type(even) .slide-vertical-line",
      {
        height: 0,
      },
      {
        height: "300px",
        ease: "power1.out",
      },
      "vetical-line"
    )
    .fromTo(
      ".swiper-slide a",
      {
        width: "2px",
      },
      {
        width: "250px",
        ease: "power1.out",
      }
    )
    .to(".img-wrapper", {
      width: "100%",
      ease: "power1.out",
      // marginLeft: 0,
      // autoAlpha: 1,
      // delay: 1,
    })
    .to(".year", {
      autoAlpha: 1,
      stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
      ease: "power1.out",
    })
    .fromTo(
      ".bottom-menu a",
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,

        ease: "back.out(5)",
      }
    )
    .staggerFromTo(
      [" .letter"],
      0.05,
      { y: -50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, ease: "back.out(5)" },
      0.05
    )
    .staggerTo([" .letter"], 0.1, { color: "#fff" }, 0.05);

  let swiper = new Swiper(".mySwiper", {
    // slidesPerView: 5,
    slidesPerView: "auto",
    spaceBetween: 50,
    freeMode: true,
  });

  document.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => console.log("bla"));
  });
});
