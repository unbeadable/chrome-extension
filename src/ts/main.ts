const ratingImage: HTMLElement = document.createElement('img');
ratingImage.setAttribute('src', 'https://78.media.tumblr.com/avatar_f27f604004a0_128.pnj');

// send request to backend
const toolTip: HTMLElement = document.createElement('div');
toolTip.id = 'unbeadable-tooltip';
toolTip.style.visibility = "hidden";


const showToolTipHandler = (toolTip: HTMLElement) => () => {
    if(toolTip.style.visibility == "hidden") {
        console.log("ToolTip Visible");
        toolTip.style.visibility = "visible";
    }
};

const hideToolTipHandler = (toolTip: HTMLElement) => () => {
    if(toolTip.style.visibility == "visible") {
        console.log("ToolTip Hidden");
        toolTip.style.visibility = "hidden";
    }
};

const ratingDiv: HTMLElement = document.createElement('div');
ratingDiv.id = 'unbeadable';
ratingDiv.appendChild(ratingImage);
ratingDiv.onmouseover = showToolTipHandler(toolTip);
ratingDiv.onmouseout = hideToolTipHandler(toolTip);

const priceDiv: HTMLElement | null = document.getElementById('zeitgeistBadge_feature_div');
priceDiv!.appendChild(ratingDiv);