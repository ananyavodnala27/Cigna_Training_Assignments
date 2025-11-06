
using System;
using static System.Formats.Asn1.AsnWriter;

namespace Assignment
{
    public class Customer
    {

        private int customerId;
        private string name;
        private string location;

        public Customer()
        {
            customerId = 0;
            name = "";
            location = "";
        }

        public Customer(int customerId)
        {
            this.customerId = customerId;
            name = "";
            location = "";
        }

        public Customer(int customerId, string name)
        {
            this.customerId = customerId;
            this.name = name;
            location = "";
        }

        public Customer(int customerId, string name, string location)
        {
            this.customerId = customerId;
            this.name = name;
            this.location = location;
        }

        public void ShowDetails()
        {
            Console.WriteLine($"Customer Details :: Id : {customerId}, Name : {name}, City : {location}");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {

            Customer c1 = new Customer();
            Customer c2 = new Customer(10256);
            Customer c3 = new Customer(10256, "Scott");
            Customer c4 = new Customer(10256, "Scott", "Hyd");

            c1.ShowDetails();
            c2.ShowDetails();
            c3.ShowDetails();
            c4.ShowDetails();
        }
    }
}
