
using System;
using static System.Formats.Asn1.AsnWriter;

namespace Assignment
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int UnitPrice { get; set; }
        public int Quantity { get; set; }

    }
    internal class Program
    {
        static void Main(string[] args)
        {

            Product obj = new Product();
            Console.Write("Enter Product Id : ");
            obj.ProductId = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Product name : ");
            obj.ProductName = Console.ReadLine();
            Console.Write("Enter Product's Unit Price : ");
            obj.UnitPrice = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter the quantity : ");
            obj.Quantity = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Product Details");
            Console.WriteLine($"Product Id : {obj.ProductId}, Product Name : {obj.ProductName}, Unit Price : {obj.UnitPrice}, Quantity : {obj.Quantity}");

        }
    }
}
