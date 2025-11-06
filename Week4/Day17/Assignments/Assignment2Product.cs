
using System;
using static System.Formats.Asn1.AsnWriter;

namespace Assignment
{
    public class Product
    {
        public int productId { get; set; }
        public string productName { get; set; }
        public int unitPrice { get; set; }
        public int quantity { get; set; }

    }
    internal class Program
    {
        static void Main(string[] args)
        {

            Product obj = new Product();
            Console.Write("Enter Product Id : ");
            obj.productId = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Product name : ");
            obj.productName = Console.ReadLine();
            Console.Write("Enter Product's Unit Price : ");
            obj.unitPrice = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter the quantity : ");
            obj.quantity = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Product Details");
            Console.WriteLine($"Product Id : {obj.productId}, Product Name : {obj.productName}, Unit Price : {obj.unitPrice}, Quantity : {obj.quantity}");

        }
    }
}
