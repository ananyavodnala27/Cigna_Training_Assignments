using System;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.Write("Enter Username : ");
            //string uname = Console.ReadLine();

            //Console.Write("Enter Age : ");
            //int age = int.Parse(Console.ReadLine());

            //Console.WriteLine("Are you a Valid User (true/false) : ");
            //bool isValidUser = bool.Parse(Console.ReadLine());

            //// Console.WriteLine("Hello World");
            //Console.WriteLine("User Details : ");
            //Console.WriteLine("Username : " + uname);
            //Console.WriteLine("User's Age : " + age);
            //Console.WriteLine("Valid User : " + isValidUser);

            //Assignment 1

            Console.Write("Enter User Level : ");
            int userLevel = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Are you the admin (true/false): ");
            bool adminStatus = Convert.ToBoolean(Console.ReadLine());

            Console.Write("Do you have special permissions (true/false): ");
            bool specPerStatus = Convert.ToBoolean(Console.ReadLine());

            int userAccessLevel = userLevel;
            if(adminStatus == true)
            {
                userAccessLevel += 50;
            }

            if (specPerStatus == true) {
                userAccessLevel += 25;
            }

            if(userAccessLevel >= 75)
            {
                Console.WriteLine("Full Access");
            }
            else if(userAccessLevel >= 50)
            {
                Console.WriteLine("Admin Access");
            }
            else if(userAccessLevel >= 25)
            {
                Console.WriteLine("Standard Access");
            }
            else
            {
                Console.WriteLine("Restricted Access");
            }
        }
    }
}
