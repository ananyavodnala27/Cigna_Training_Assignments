using System;

namespace Assignment
{

    internal class Program
    {

        public static void Log(string message)
        {
            Console.WriteLine($"INFO: {message}");
        }

        public static void Log(string message, string level)
        {
            Console.WriteLine($"{level}: {message}");
        }

        public static void Log(string message, string level, DateTime timeDate)
        {
            Console.WriteLine($"{timeDate} | {level}: {message}");
        }

        static void Main(string[] args)
        {
            Log("Application Started");
            Console.WriteLine("-------------------");
            Log("Manage Memory", "WARNING");
            Console.WriteLine("-------------------");
            Log("System Crash", "ERROR", DateTime.Now);
        }
    }
}
