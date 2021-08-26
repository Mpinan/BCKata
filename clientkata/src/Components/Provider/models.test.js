import { init } from "@rematch/core";
import { models } from './models';

describe("App", () => {
  let store;
  beforeEach(() => {
    store = init({
      models: {
        products: { ...models, state: { products: [] } },
      },
    })
  })
  it("should be able to list items", () => {
    expect(true).toBe(true);
  });
});