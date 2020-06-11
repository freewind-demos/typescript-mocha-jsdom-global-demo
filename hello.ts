function createHelloDiv(name: string) {
  const div = document.createElement('div')
  div.setAttribute('id', 'hello');
  div.innerHTML = `Hello, ${name}`;
  return div;
}

export default function hello(name: string): void {
  const div = createHelloDiv(name);
  document.body.appendChild(div);
  (window as any).hello = name;
}
