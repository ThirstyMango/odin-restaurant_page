export function Menu() {
  const textContent = `  
          <p class="content__header">Our menu includes:</p>
          <ul class="content__list">
            <li class="item">Bibimbap</li>
            <li>Bum bo Nam Bo</li>
            <li>Pho</li>
            <li>Butter Chicken</li>
            <li>Fried Rice</li>
          </ul>
    `;
  const menu = document.createElement("div");
  menu.innerHTML = textContent;
  return menu;
}
