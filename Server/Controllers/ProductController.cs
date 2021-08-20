using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.IO;

namespace BuildCircleKata.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            StreamReader r = new StreamReader("./items.json");
            string jsonString = r.ReadToEnd();


            var jsonDeserialized = JsonConvert.DeserializeObject<Root>(jsonString);
            List<Product> productsList = jsonDeserialized.Items;

            return productsList;

        }

        [HttpGet("{id}")]
        public IActionResult GetIndex(int? id)
        {
            StreamReader r = new StreamReader("./items.json");
            string jsonString = r.ReadToEnd();


            var jsonDeserialized = JsonConvert.DeserializeObject<Root>(jsonString);
            List<Product> productsList = jsonDeserialized.Items;

            var item = productsList.FirstOrDefault(t => t.id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

    }
}