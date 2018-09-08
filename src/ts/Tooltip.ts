export class Tooltip {

    constructor(private element: HTMLElement) {
        this.element.id = 'unbeadable-tooltip';
        this.element.style.visibility = "hidden";
        this.element.style.position = "absolute";
        this.element.style.height = "200px";
        this.element.style.width = "200px";
        this.element.style.backgroundColor = "red";
    }

    show() {
        this.element.style.visibility = "visible";
    }

    hide() {
        this.element.style.visibility = "hidden";
    }
}