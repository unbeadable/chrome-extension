import { MicroplasticAsinLookup } from './MicroplasticAsinLookup';
import {Badge} from './Badge';

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

const tagRecommendations = () => {
    const recommendationCards: HTMLCollectionOf<Element> = document.getElementsByClassName("a-carousel-card");
    const length = recommendationCards.length;

    for (let i = 0; i < length; i++) {
        let element: HTMLElement = recommendationCards.item(i) as HTMLElement;
        let parse = JSON.parse(element.getElementsByTagName('div')[0].getAttribute('data-p13n-asin-metadata') as string);

        MicroplasticAsinLookup.lookup(parse.asin).then(() => {
            let badgeContainer = document.createElement('div');
            badgeContainer.id = `reco-badge-${i}`;
            badgeContainer.style.width = '100%';
            element.appendChild(badgeContainer);
            new Badge(badgeContainer, false, "asin lookup result")
        }).catch((error) => {
            console.log(`Did not receive information: ${error}`);
        });
    }

    return
};


const asin = findAsin();
if (!!asin) {
    MicroplasticAsinLookup.lookup(asin).then((microplastics: string) => {
        new Badge(document.getElementById('zeitgeistBadge_feature_div')!, true, microplastics);
    }).catch((error) => {
        console.log(`Did not receive information: ${error}`);
    });
} else {
    console.log("Could not find ASIN.");
}

tagRecommendations();