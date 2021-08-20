using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BuildCircleKata
{
    public class Product
    {
        public int id { get; set; }
        public string name { get; set; }
        public double price { get; set; }
        public string image { get; set; }
        public string description { get; set; }
        public List<string> tags { get; set; }
        public string category { get; set; }
    }

    public class Root
    {
        public List<Product> Items { get; set; }
    }
}
