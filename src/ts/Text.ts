export class Text {
  readonly element: HTMLElement = document.createElement("span");

  constructor(txtContent: string, styles: string) {
    this.element.setAttribute("class", styles);
    this.element.innerText = txtContent;
  }
}
