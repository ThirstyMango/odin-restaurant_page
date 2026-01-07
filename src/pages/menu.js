export function Menu() {
  const textContent = `  
    The menu
    `;
  const menu = document.createElement("div");
  menu.innerHTML = textContent;
  return menu;
}
