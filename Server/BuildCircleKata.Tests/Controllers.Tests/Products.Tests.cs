using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using FluentAssertions;
using Xunit;

namespace BuildCircleKata.Tests.Controllers.Tests
{
    public class ProductsTests
    {
        [Fact]
        public async Task WhenCallingApi_ReturnsOk()
        {
            var apiClient = new HttpClient();

            var apiResponse = await apiClient.GetAsync("https://localhost:5001/Products");

            apiResponse.StatusCode.Should().Be(HttpStatusCode.OK);

        }
    }
}