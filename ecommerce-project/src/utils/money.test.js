/*
  Automated Testing in React

  We use npm packages to write automated tests.
  The two most popular testing libraries are Jest and Vitest.

  Both are similar, but in this project we use Vitest because it integrates well with Vite.

  Install Vitest:
         npm install --save-dev vitest
  --save-dev means it is only needed during development, not in production.

  Types of testing:
  - Unit Tests: testing a small piece (unit) of code in isolation.
  -Integration Tests: test multiple units of code working together.

  Running tests:
       npx vitest

  Vitest automatically looks for files ending with ".test.js" or ".test.jsx" and runs all the tests inside them.
*/

//unit test
//In unit testing, we usually test by directly running a function.

import { it, expect, describe } from "vitest"; //it allows to create tests, expect = checks if the result is correct
import formatMoney from "./money";

//Used to group related tests into a test suite.
describe("formatMoney", () => {
  it("formats 1234 cents as $12.34", () => {
    expect(formatMoney(1234)).toBe("$12.34");
  });

  //can have mutiple expects
  it("displays two decimals", () => {
    expect(formatMoney(9990)).toBe("$99.90");
    expect(formatMoney(120)).toBe("$1.20");
  });
});

//integration test: refer "Product.test.jsx"
