const axios = require('axios');
const {init} = require("@rematch/core");
jest.mock('axios');

describe("Can call api", () => {
    it("mocking endpoint", () => {
        const mockResponse = {
            data:
                {
                    "id":1,
                    "name":"Apple",
                    "price":12.5,
                    "image":null,
                    "tags":["fruit","red"],
                    "category":"fruit"
                }
        }
        axios.get.mockResolvedValue(mockResponse);
        const service = require("./service")
        service.getItems()
    });
});