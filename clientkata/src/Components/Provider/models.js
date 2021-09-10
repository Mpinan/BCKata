import { getItems } from './service'


export const products = {
  state: {
    items: [],
  },

  reducers: {
    setProducts(state, items) {
      return {
        ...state,
        items,
      };
    },
  },
  effects: {
    async loadProducts() {
      const items = await getItems()

      // const products = ["Hello", "bye"]
      console.log(items)
      this.setProducts(items)
    },
  }

}
