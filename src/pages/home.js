export function Home() {
  const textContent = `  
    The home
    `;
  const menu = document.createElement("div");
  menu.innerHTML = textContent;
  return menu;
}
