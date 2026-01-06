export function getMenu() {
  const textContent = `  
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    `;
  const menu = document.createElement("div");
  menu.innerHTML = textContent;
  return menu;
}
