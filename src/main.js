import "./style.css";
import "./boilerplate.css";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { About } from "./pages/about";

new (class Controller {
  constructor() {
    this.cacheDom();
    this.bindEvents();
    this.pages = { Home: Home(), Menu: Menu(), About: About() };
    this.render(this.pages["Home"]);
  }

  cacheDom() {
    this.nav = document.querySelector(".nav");
    this.btns = this.nav.querySelectorAll(".nav__btn");
    this.content = document.getElementById("content");
  }

  bindEvents() {
    this.nav.addEventListener("click", (e) => this.handleNavClick(e));
  }

  handleNavClick(e) {
    if (!e.target.dataset.page) return;

    const btnClicked = e.target;
    this.highlightButton(btnClicked);

    const pageName = btnClicked.dataset.page;
    const page = this.pages[pageName];
    this.render(page);
  }

  highlightButton(btn) {
    Array.from(this.btns).forEach((btn) =>
      btn.classList.remove("nav__btn--active")
    );
    btn.classList.add("nav__btn--active");
  }

  render(page) {
    this.content.textContent = "";
    this.content.appendChild(page);
  }
})();
