import { render } from "../main";

describe("main", () => {
  const hostDivId: string = "zeitgeistBadge_feature_div";
  const hostDivHtml: string = `<div id="${hostDivId}"></div>`;
  const asinInfo =
    '<table><tr><td class="label">ASIN</td><td class="value">B001LQCCDK</td></tr></table>';

  it("should attach badge to target host div when page has ASIN info", async () => {
    document.body.innerHTML = hostDivHtml + asinInfo;

    render();

    const hostDiv: HTMLElement = document.getElementById(hostDivId)!!;
    expect(hostDiv.innerHTML).toMatchSnapshot();
  });

  it("should keep HTML as is when page does not have ASIN info", async () => {
    document.body.innerHTML = hostDivHtml;

    render();

    const hostDiv: HTMLElement = document.getElementById(hostDivId)!!;
    expect(hostDiv.innerHTML).toMatchSnapshot();
  });
});
