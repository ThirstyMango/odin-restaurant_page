import "./style.css";
import "./boilerplate.css";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { About } from "./pages/about";

new (class Controller {
  constructor() {
    this.cacheDom();
    this.bindEvents();
    this.pages = { Home, Menu, About };
    this.render(this.pages["Home"]());
  }

  cacheDom() {
    this.nav = document.querySelector(".nav");
    this.content = document.getElementById("content");
  }

  bindEvents() {
    this.nav.addEventListener("click", (e) => this.handleNavClick(e));
  }

  handleNavClick(e) {
    if (!e.target.dataset.page) return;

    const pageName = e.target.dataset.page;
    const page = this.pages[pageName]();
    this.render(page);
  }

  render(page) {
    this.content.textContent = "";
    this.content.appendChild(page);
  }
})();
