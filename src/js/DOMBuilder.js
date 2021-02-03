class DomBuilder {

  constructor() {

  }
  h2(title, className) {
    const h2 = document.createElement('h2');
    h2.textContent = title;
    h2.classList.add(className);
    return h2;
  }

  img(src, className) {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add(className);

    return img;
  }

  p(content, className) {
    const p = document.createElement('p');
    p.textContent = content;
    p.classList.add(className);

    return p;
  }

  button(content, className, id) {
    const button = document.createElement('button');
    button.textContent = content;
    button.classList.add(className);
    button.setAttribute('data-id', id)

    return button;
  }

  input(text, className) {
    const input = document.createElement("INPUT");
    input.type = 'text';
    input.placeholder = text;
    input.classList.add(className);

    return input;
  }

} 