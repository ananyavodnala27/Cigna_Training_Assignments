using Microsoft.AspNetCore.Mvc;
using ProductsAssignment.Models;

namespace ProductsAssignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        public static List <Product> Products = new List<Product>() { 
            new Product() { Id = 1, Name = "Laptop", Price = 65000, Category = "Electronics" },
            new Product() { Id = 2, Name = "TV", Price = 95000, Category = "Electronics" },
            new Product() { Id = 3, Name = "Mobile Phone", Price = 40000, Category = "Electronics" }
        };

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(Products);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            Product ProductToFetch = Products.FirstOrDefault((p) => p.Id == id);
            if (ProductToFetch == null)
            {
                return NotFound(new { Message = "Product Does Not Exist." });
            }
            return Ok(ProductToFetch);
        }

        [HttpPost]
        public IActionResult CreateProduct(Product product)
        {
            Products.Add(product);
            return Ok(new { Message = "New Product Added Successfully." });
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            Product ProductToDelete = Products.FirstOrDefault((p) => p.Id == id);

            if (ProductToDelete == null)
            {
                return NotFound(new { Message = "Product Does Not Exist." });
            }
            Products.Remove(ProductToDelete);
            return Ok(new { Message = "Product Deleted Successfully." });
        }
    }
}
