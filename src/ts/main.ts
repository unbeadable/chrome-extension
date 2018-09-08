import { MicroplasticsReader } from './MicroplasticsReader';

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

const microplasticsReader = new MicroplasticsReader();

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

const asin = findAsin();
if (!!asin) {
    microplasticsReader.lookupMicroplasticsForAsin(asin).then((response: String) => {
        console.log(response);

        const badge: HTMLElement = document.createElement('div');
        badge.id = 'unbeadable';
        badge.setAttribute('style', 'display: flex;');
        badge.appendChild(badgeIcon);
        badge.appendChild(badgeText);

        const badgeWrapper: HTMLElement | null = document.getElementById('zeitgeistBadge_feature_div');
        badgeWrapper!.appendChild(badge);
        badgeWrapper!.setAttribute("style", "border: 1px solid red;\n" +
            "    border-radius: 5px;\n" +
            "    padding: 2px;\n" +
            "    max-width: 300px;\n" +
            "    margin-bottom: 15px;\n" +
            "    margin-top: 15px;\n" +
            "    background-color: red;")

    }).catch( (error) => {
        console.log(`Did not receive information: ${error}`);
    });
} else {
    console.log("Could not find ASIN.");
}