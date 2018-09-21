import { BadgeIcon } from "../BadgeIcon";

describe("BadgeIcon", () => {
  it("should match snapshot", () => {
    expect(new BadgeIcon().element).toMatchSnapshot();
  });
});
