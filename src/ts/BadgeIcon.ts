export class BadgeIcon {
  readonly element: HTMLElement = document.createElement("img");

  constructor() {
    this.element.setAttribute(
      "src",
      "https://s3.eu-central-1.amazonaws.com/unbeadable/baseline-report-24px.svg"
    );
    this.element.setAttribute("class", "unbdbl-badge-icon");
  }
}
