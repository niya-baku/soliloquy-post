import { render, screen } from "@testing-library/react";

import { Main } from "./Main";

describe("Main template", () => {
  describe("Render method", () => {
    it("should have 8 menu items", () => {
      render(<Main meta={null}>{null}</Main>);

      const menuItemList = screen.getAllByRole("listitem");

      expect(menuItemList).toHaveLength(4);
    });

    it("should have a link to support creativedesignsguru.com", () => {
      render(<Main meta={null}>{null}</Main>);
    });
  });
});
