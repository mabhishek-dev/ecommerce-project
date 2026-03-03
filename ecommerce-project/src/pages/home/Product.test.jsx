import { it, expect, describe, vi } from "vitest";
import { Product } from "./Product";

// Renders a component into a fake/dummy DOM environment for testing.
//screen = check the fake web page
import { render, screen } from "@testing-library/react";

//integration test
/*
  For integration testing (especially with React components),
  we need to render the component first in order to test its behavior.

  For this, we install React Testing Library and related packages:

    npm install --save-dev \
      @testing-library/react@16.3.0 \
      @testing-library/jest-dom@6.6.3 \
      @testing-library/user-event@14.6.1 \
      jsdom@26.1.0

  These tools help us render components and simulate user interactions.

  We also need to add a vitest.config.js and setupTests.js file for proper setup.
  Refer to vitest.config.js and setupTests.js for more details.
*/
describe("Product Component", () => {
  it("displays the product details currently", () => {
    const product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };

    const loadCart = vi.fn(); //Creates a fake function that doesn't do anything(mock).
    // We don’t pass the real loadCart function here because it would update the backend.
    // Instead, we mock it using vi.fn() for testing.
    render(<Product product={product} loadCart={loadCart} />);

    //This checks if the page (fake page) has what we have specified.
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).toBeInTheDocument();

    expect(screen.getByText("$10.90")).toBeInTheDocument();

    // More tests can be written using tools like getByTestId, toHaveAttribute, etc.
    // Vitest and React Testing Library provide many helpers for this.
  });
});
