
using System;
using static System.Formats.Asn1.AsnWriter;

namespace Assignment
{
    public class Employee
    {
        public int EmpId {  get; set; }
        public string Name { get; set; }
        public string Job { get; set; }
        public int Basic { get; set; }
        public double HRA { get; set; }
        public double DA { get; set; }
        public double IT { get; set; }
        public double PF { get; set; }
        public double GrossSalary { get; set; }

        public double GetGrossSalary()
        {
            HRA = 0.15 * basic;
            DA = 0.08 * basic;
            IT = 0.10 * basic;
            PF = 0.05 * basic;
            GrossSalary = Basic + HRA + DA - IT - PF;
            return GrossSalary;
        }

        public void PrintDetails()
        {
            Console.WriteLine("----- Employee Salary Details -----");
            GetGrossSalary();
            Console.WriteLine($"Employee Id : {EmpId}\nEmployee Name : {Name}\nEmployee job : {Job}\n{Name}'s basic salary : {Basic}\nHRA : {HRA}\nDA : {DA}\nIT : {IT}\nPF : {PF}");
            Console.WriteLine($"Gross Salary : {GetGrossSalary()}");
        }
    }

    internal class Program
    {
        
        static void Main(string[] args)
        {

            Employee emp = new Employee();
            Console.Write("Enter Employee Id : ");
            emp.EmpId = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Employee name : ");
            emp.Name = Console.ReadLine();
            Console.Write("Enter Your Job : ");
            emp.Job = Console.ReadLine();
            Console.Write("Enter base salary : ");
            emp.Basic = Convert.ToInt32(Console.ReadLine());

            emp.PrintDetails();

        }
    }
}
