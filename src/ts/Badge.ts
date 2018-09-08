
export class Badge {

    constructor(containerElement: HTMLElement, tooltipenabled: boolean, microplastics: string) {
        const badgeIcon: HTMLElement = document.createElement('img');
        badgeIcon.setAttribute('src', 'https://s3.eu-central-1.amazonaws.com/unbeadable/baseline-report-24px.svg');
        badgeIcon.setAttribute('style', 'flex: 0 0 24px;');

        const badgeText: HTMLElement = document.createElement('div');
        badgeText.setAttribute('style', '' +
            '    flex: 1;\n' +
            '    color: white;\n' +
            '    font-size: 13px !important;\n' +
            '    padding-left: 5px;\n' +
            '    line-height: normal;');
        badgeText.innerText = 'This product contributes to the pollution of our oceans.';

        const subline = document.createElement('h2');
        subline.innerText = 'Unbead the oceans.';

        const tooltipImage = document.createElement('img');
        tooltipImage.setAttribute('src', 'https://media.giphy.com/media/l4FGtZqkEJnw3V2lW/giphy.gif');

        const tooltipTitle = document.createElement('p');
        tooltipTitle.setAttribute('style', 'font-weight: bold;');
        tooltipTitle.innerText = `This product contains the following Microplastic(s):\n${microplastics}`;

        const tooltipDescription = document.createElement('p');
        tooltipDescription.innerText = 'Microplastic pollution affects sea life in numerous ways. It destroys ecosystems, changes the behaviour of species in the sea by affecting their brain, and increases mortality rates of the species.';

        const tooltipSpan: HTMLElement = document.createElement('span');
        tooltipSpan.setAttribute('class', 'tooltiptext');
        tooltipSpan.setAttribute('style', 'visibility: hidden;\n' +
            '    width: 250px;\n' +
            '    background-color: white;\n' +
            '    color: #bc2525;\n' +
            '    text-align: center;\n' +
            '    border-radius: 5px;\n' +
            '    padding: 15px;\n' +
            '    position: absolute;\n' +
            '    z-index: 1;\n' +
            '    top: 100%;\n' +
            '    left: 50%;\n' +
            '    margin-top: 5px;\n' +
            '    margin-left: -125px;\n' +
            '    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);');
        tooltipSpan.appendChild(tooltipTitle);
        tooltipSpan.appendChild(tooltipDescription);
        tooltipSpan.appendChild(tooltipImage);
        tooltipSpan.appendChild(subline);

        const badge: HTMLElement = document.createElement('div');
        badge.setAttribute('style', 'display: flex;');
        badge.appendChild(badgeIcon);
        badge.appendChild(badgeText);
        badge.onmouseover = function () {tooltipSpan.style.visibility =  tooltipenabled ? 'visible' : 'hidden'};
        badge.onmouseout = function () {tooltipSpan.style.visibility = 'hidden'};

        const badgeWrapper: HTMLElement = containerElement;
        badgeWrapper!.appendChild(badge);
        badgeWrapper!.appendChild(tooltipSpan);
        badgeWrapper!.setAttribute('class', 'tooltip');
        badgeWrapper!.setAttribute("style", "" +
            "    border: 1px solid #bc2525;\n" +
            "    border-radius: 5px;\n" +
            "    padding: 4px;\n" +
            "    max-width: 250px;\n" +
            "    margin-bottom: 15px;\n" +
            "    margin-top: 15px;\n" +
            "    background-color: #bc2525;" +
            "    position: relative;\n" +
            "    display: inline-block;\n" +
            "    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);")    }


}