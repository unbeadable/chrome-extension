import { MicroplasticAsinLookup } from './MicroplasticAsinLookup';
import {Badge} from './Badge';

const findAsin = () => {
    const asinLabel = Array.from(document.getElementsByClassName('label'))
        .find(it => it.innerHTML == "ASIN");

    if (!!asinLabel) {
        const nextElementSibling = asinLabel.nextElementSibling;
        if (!!nextElementSibling) {
            return nextElementSibling.innerHTML
        }
    }fi

    return null;
};

const tagRecommendations = () => {
    const recommendationCards: HTMLCollectionOf<Element> = document.getElementsByClassName("a-carousel-card");
    const length = recommendationCards.length;

    for (let i = 0; i < length; i++) {
        const element: HTMLElement = recommendationCards.item(i) as HTMLElement;
        const parse = JSON.parse(element.getElementsByTagName('div')[0].getAttribute('data-p13n-asin-metadata') as string);

        MicroplasticAsinLookup.lookup(parse.asin).then(() => {
            const badgeContainer = document.createElement('div');
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