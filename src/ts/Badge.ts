import { BadgeIcon } from "./BadgeIcon";
import { Text } from "./Text";

export class Badge {
  readonly element: HTMLElement = document.createElement("div");

  constructor() {
    this.element.setAttribute("class", "unbdbl-badge unbdbl-primary-text");
    this.element.appendChild(new BadgeIcon().element);
    const label = "This product contributes to the pollution of our oceans.";
    this.element.appendChild(new Text(label, "unbdbl-primary-text").element);
  }
}
