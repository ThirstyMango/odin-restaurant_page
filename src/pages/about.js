export function About() {
  const textContent = `  
    The About
    `;
  const menu = document.createElement("div");
  menu.innerHTML = textContent;
  return menu;
}
