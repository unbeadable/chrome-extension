import { Badge } from "../Badge";

describe("Badge", () => {
  it("should match snapshot", () => {
    expect(new Badge().element).toMatchSnapshot();
  });
});
