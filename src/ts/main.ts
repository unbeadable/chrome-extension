import { ApiClient } from './ApiClient';

const ratingImage: HTMLElement = document.createElement('img');
ratingImage.setAttribute('src', 'https://78.media.tumblr.com/avatar_f27f604004a0_128.pnj');

const labels: HTMLCollectionOf<Element> = document.getElementsByClassName('label');

const length = labels.length;
const apiClient = new ApiClient();

const findAsin = () => {
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

const asin = findAsin();
if (!!asin) {
    apiClient.getDataForASIN(asin).then((response) => {
        console.log(response);

        // send request to backend
        const toolTip: HTMLElement = document.createElement('div');
        toolTip.id = 'unbeadable-tooltip';
        toolTip.style.visibility = "hidden";
        toolTip.style.position = "absolute";
        toolTip.style.height = "200px";
        toolTip.style.width = "200px";
        toolTip.style.backgroundColor = "red";


        const showToolTipHandler = (toolTip: HTMLElement) => () => {
            if (toolTip.style.visibility == "hidden") {
                toolTip.style.visibility = "visible";
            }
        };

        const hideToolTipHandler = (toolTip: HTMLElement) => () => {
            if (toolTip.style.visibility == "visible") {
                toolTip.style.visibility = "hidden";
            }
        };

        const ratingDiv: HTMLElement = document.createElement('div');
        ratingDiv.id = 'unbeadable';
        ratingDiv.appendChild(ratingImage);
        ratingDiv.appendChild(toolTip);
        ratingDiv.onmouseover = showToolTipHandler(toolTip);
        ratingDiv.onmouseout = hideToolTipHandler(toolTip);

        const priceDiv: HTMLElement | null = document.getElementById('zeitgeistBadge_feature_div');
        priceDiv!.appendChild(ratingDiv);
    }).catch( (error) => {
        console.log(`Did not receive response from backend: ${error}`);
    });
} else {
    console.log("Could not find ASIN.");
}