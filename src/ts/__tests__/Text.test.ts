import { Text } from "../Text";

describe("Badge", () => {
  it("should match snapshot", () => {
    expect(new Text("someText", "someStyle").element).toMatchSnapshot();
  });
});
