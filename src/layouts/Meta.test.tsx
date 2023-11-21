import { render } from "@testing-library/react";
import { Meta } from "./Meta";

describe("Meta component", () => {
  test("renders correctly", () => {
    const props = {
      title: "Test Title",
      description: "Test Description",
      canonical: "https://example.com",
    };

    render(<Meta {...props} />);

    // Add your assertions here
  });
});
