const priceDiv: HTMLElement | null = document.getElementById('zeitgeistBadge_feature_div');
console.log(priceDiv);
const ratingDiv: HTMLElement = document.createElement('div');
ratingDiv.id = 'unbeadable';
const ratingImage: HTMLElement = document.createElement('img');
ratingImage.setAttribute('src', 'https://78.media.tumblr.com/avatar_f27f604004a0_128.pnj');
ratingDiv.appendChild(ratingImage);
priceDiv!.appendChild(ratingDiv);