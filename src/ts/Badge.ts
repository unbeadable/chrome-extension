import { BadgeIcon } from "./BadgeIcon";

const badgeText: () => HTMLElement = () => {
  const element = document.createElement("span");
  element.setAttribute("class", "unbdbl-primary-text");
  element.innerText =
    "This product contributes to the pollution of our oceans.";
  return element;
};

export class Badge {
  readonly element: HTMLElement = document.createElement("div");

  constructor() {
    this.element.setAttribute("class", "unbdbl-badge unbdbl-primary-text");
    this.element.appendChild(new BadgeIcon().element);
    this.element.appendChild(badgeText());
  }
}
