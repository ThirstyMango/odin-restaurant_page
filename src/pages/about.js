export function About() {
  const textContent = `  
    <p class="content__text">
            We are a family restaurant opened in 2010 with a focus on the most
            popular asian dishes ever created. Do not hesitate to contact us for
            reservation or with just any question what so ever at
            <a href="tel:422-312-123">422-312-123</a>.
    </p>
    `;
  const menu = document.createElement("div");
  menu.innerHTML = textContent;
  return menu;
}
