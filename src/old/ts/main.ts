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
    }

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
    console.log("on product page");
    MicroplasticAsinLookup.lookup(asin).then((microplastics: string) => {
        new Badge(document.getElementById('zeitgeistBadge_feature_div')!, true, microplastics);
    }).catch((error) => {
        console.log(`Did not receive information: ${error}`);
    });

    tagRecommendations();
} else {
    console.log("Could not find ASIN.");
}

const searchInfoBar = document.getElementById('s-result-info-bar-content');


const getSearchResults = () => {
    return Array.from(document.getElementsByTagName('li'))
        .filter(it => it.hasAttribute('data-asin'))
};

if (!!searchInfoBar) {
    console.log("on search page.");
    getSearchResults()
        .forEach(it => {
        MicroplasticAsinLookup.lookup(it.getAttribute('data-asin')!).then((microplastics: string) => {
            let anchor = it.getElementsByClassName('a-row a-spacing-base')[0];
            const badgeContainer = document.createElement('div');
            badgeContainer.style.width = '100%';
            anchor.appendChild(badgeContainer);
            new Badge(badgeContainer, false, microplastics);
        }).catch(() => console.log("Could not find asin."));
    });
}

const shoppingCartHeader = document.getElementsByClassName('a-row sc-cart-header sc-compact-bottom')[0];

const getCartContents = () => {
    return Array.from(document.getElementsByClassName('a-row sc-list-item sc-list-item-border sc-java-remote-feature'))
        .filter(it => it.hasAttribute('data-asin'))
};

if (!!shoppingCartHeader) {
    console.log("on shopping cart page.");
    getCartContents()
        .forEach(it => {
            MicroplasticAsinLookup.lookup(it.getAttribute('data-asin')!).then((microplastics: string) => {
                let anchor = it.getElementsByClassName('a-unordered-list a-nostyle a-vertical a-spacing-mini')[0];
                const badgeContainer = document.createElement('div');
                badgeContainer.style.width = '100%';
                anchor.appendChild(badgeContainer);
                new Badge(badgeContainer, true, microplastics);
            }).catch(() => console.log("Could not find asin."));
        });
} else {
    console.log("not on shopping cart page.");
}
