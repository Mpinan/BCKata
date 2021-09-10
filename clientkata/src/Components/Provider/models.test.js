import { init } from "@rematch/core";

jest.mock("./models.js")

describe("App", () => {
  const mockLoadProducts = jest.fn();
  let store;

  beforeEach(() => {
    store = init({
      products: {
        items: {
          state: {items: ["hello", "hello", "hello"]},
          effects: {
            loadProducts: mockLoadProducts
          }
        },
      },
    })
  })
  it("should be able to list items", () => {
    console.log(mockLoadProducts())
    expect(mockLoadProducts()).toBe([]);
  });
});