using System;

namespace Assignment
{
    class Program
    {
        public static void Main(string[] args)
        {
            string[] strArr = new string[]{"Smith", "Amy", "June", "Jack", "Matt" };

            Console.Write("Names in the array : ");
            for(int i = 0; i < strArr.Length; i ++)
            {
                Console.Write($"{strArr[i]} ");
            }

            Console.WriteLine();

            Console.WriteLine("Enter the name you want to search for : ");
            string name = Console.ReadLine();
            // strArr.Contains(name)
            Console.WriteLine($"Name is present at position {Array.IndexOf(strArr, name) + 1}");
        }
    }
}