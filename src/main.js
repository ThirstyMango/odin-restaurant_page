import "./style.css";
import { getMenu } from "./menu";
const content = document.getElementById("content");
content.appendChild(getMenu());
