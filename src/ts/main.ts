import { Badge } from "./Badge";

export function render() {
  const findAsin = () => {
    const asinLabel = Array.from(document.getElementsByClassName("label")).find(
      element => element.innerHTML == "ASIN"
    );

    if (!!asinLabel) {
      const nextElementSibling = asinLabel.nextElementSibling;
      if (!!nextElementSibling) {
        return nextElementSibling.innerHTML;
      }
    }
    return null;
  };

  const hostDiv = document.getElementById("zeitgeistBadge_feature_div");
  if (!!findAsin()) {
    if (!!hostDiv) {
      hostDiv.appendChild(new Badge().element);
    }
  }
}

render();
