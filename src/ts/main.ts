import { ApiClient } from './ApiClient';
import { Tooltip } from './Tooltip';

const showToolTipHandler = (toolTip: Tooltip) => () => {
    toolTip.show()
};

const hideToolTipHandler = (toolTip: Tooltip) => () => {
    toolTip.hide()
};

const findAsin = () => {
    const labels: HTMLCollectionOf<Element> = document.getElementsByClassName('label');
    const length = labels.length;

    for (let i = 0; i < length; i++) {
        let element: Element = labels.item(i);

        if (element.innerHTML == "ASIN") {
            const asin = (element.nextSibling as Element).innerHTML;
            console.log(asin);
            return asin;
        }
    }

    return null;
};

const ratingImage: HTMLElement = document.createElement('img');
ratingImage.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0%0D%0APSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNDUuNDYgNDUuNDZMNS41NCA1LjU0%0D%0AIDQgNCAyLjU0IDIuNTQgMCA1LjA4bDguNzggOC43OCA0LjQyIDkuMzItMi43IDQuOWMtLjMyLjU2%0D%0ALS41IDEuMjItLjUgMS45MiAwIDIuMiAxLjggNCA0IDRoMTQuOTJsMi43NiAyLjc2Yy0xIC43My0x%0D%0ALjY2IDEuOTEtMS42NiAzLjI0IDAgMi4yIDEuNzggNCAzLjk4IDQgMS4zMyAwIDIuNTEtLjY3IDMu%0D%0AMjQtMS42OEw0Mi45MiA0OGwyLjU0LTIuNTR6TTE0Ljg0IDMwYy0uMjggMC0uNS0uMjItLjUtLjVs%0D%0ALjA2LS4yNEwxNi4yIDI2aDQuNzJsNCA0SDE0Ljg0em0xNi4yNi00YzEuNSAwIDIuODItLjgyIDMu%0D%0ANS0yLjA2bDcuMTYtMTIuOThjLjE2LS4yOC4yNC0uNjIuMjQtLjk2IDAtMS4xLS45LTItMi0ySDEz%0D%0ALjA4bDE4IDE4aC4wMnpNMTQgMzZjLTIuMiAwLTMuOTggMS44LTMuOTggNHMxLjc4IDQgMy45OCA0%0D%0AIDQtMS44IDQtNC0xLjgtNC00LTR6Ii8+PC9zdmc+');

const apiClient = new ApiClient();

const asin = findAsin();
if (!!asin) {
    apiClient.getDataForASIN(asin).then((response) => {
        console.log(response);

        // send request to backend
        const tooltipElem: HTMLElement = document.createElement('div');
        const tooltip = new Tooltip(tooltipElem);

        const ratingDiv: HTMLElement = document.createElement('div');
        ratingDiv.id = 'unbeadable';
        ratingDiv.appendChild(ratingImage);
        ratingDiv.appendChild(tooltipElem);
        ratingDiv.onmouseover = showToolTipHandler(tooltip);
        ratingDiv.onmouseout = hideToolTipHandler(tooltip);

        const priceDiv: HTMLElement | null = document.getElementById('zeitgeistBadge_feature_div');
        priceDiv!.appendChild(ratingDiv);
    }).catch( (error) => {
        console.log(`Did not receive response from backend: ${error}`);
    });
} else {
    console.log("Could not find ASIN.");
}