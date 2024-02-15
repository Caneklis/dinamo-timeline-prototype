import { Modals } from "./modals";
import { gsap, Power4 } from "gsap";

let modals;

const settings = {
  default: {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    resetScrollPos: false,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
  // modal-1, modal-6 добавлен исключительно для примера при добавлении на проект ключ и обект записанный в нём нужно удалить
  "modal-1": {
    openCallback: () => {
      console.log("Я отработаю при открытии modal-1");
      let tl = gsap.timeline();

      tl.fromTo(
        ".modal.is-active article h2",
        1,
        {
          autoAlpha: 0,
          y: 200,
        },
        {
          autoAlpha: 1,
          y: 0,
          delay: 0.3,
          ease: "power1.out",
        },
        "start"
      )
        .fromTo(
          ".modal.is-active section img",
          2,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            delay: 0.5,
            ease: "power1.out",
          },
          "start"
        )
        .fromTo(
          ".modal.is-active article p",
          1,
          {
            autoAlpha: 0,
            y: 100,
          },
          {
            autoAlpha: 1,
            y: 0,
            delay: 0.6,
            ease: "power1.out",
          },
          "start"
        );
    },
    closeCallback: () => console.log("Я отработаю при закрытии modal-1"),
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll(".modal");
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove("modal--preload");
      }, 100);
    });
  }

  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;
};

export { modals, initModals };
