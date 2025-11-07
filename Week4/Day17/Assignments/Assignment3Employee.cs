
using System;
using static System.Formats.Asn1.AsnWriter;

namespace Assignment
{
    public class Employee
    {
        public int empId {  get; set; }
        public string name { get; set; }
        public string job { get; set; }
        public int basic { get; set; }
        public double HRA { get; set; }
        public double DA { get; set; }
        public double IT { get; set; }
        public double PF { get; set; }
        public double grossSalary { get; set; }

        public double GetGrossSalary()
        {
            HRA = 0.15 * basic;
            DA = 0.08 * basic;
            IT = 0.10 * basic;
            PF = 0.05 * basic;
            grossSalary = basic + HRA + DA - IT - PF;
            return grossSalary;
        }

        public void PrintDetails()
        {
            Console.WriteLine("----- Employee Salary Details -----");
            GetGrossSalary();
            Console.WriteLine($"Employee Id : {empId}\nEmployee Name : {name}\nEmployee job : {job}\n{name}'s basic salary : {basic}\nHRA : {HRA}\nDA : {DA}\nIT : {IT}\nPF : {PF}");
            Console.WriteLine($"Gross Salary : {GetGrossSalary()}");
        }
    }

    internal class Program
    {
        
        static void Main(string[] args)
        {

            Employee emp = new Employee();
            Console.Write("Enter Employee Id : ");
            emp.empId = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Employee name : ");
            emp.name = Console.ReadLine();
            Console.Write("Enter Your Job : ");
            emp.job = Console.ReadLine();
            Console.Write("Enter base salary : ");
            emp.basic = Convert.ToInt32(Console.ReadLine());

            emp.PrintDetails();

        }
    }
}
