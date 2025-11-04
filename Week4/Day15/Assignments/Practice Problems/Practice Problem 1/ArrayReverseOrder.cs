using System;

namespace Assignment
{
    class Program
    {
        public static void Main(string[] args)
        {
            int[] arr = new int [10];

            Console.Write("Enter the array elements : ");
            for(int i = 0; i < arr.Length; i ++)
            {
                arr[i] = Convert.ToInt32(Console.ReadLine());
            }

            Console.WriteLine("Array elements : ");
            for(int i = 0; i < arr.Length; i ++)
            {
                Console.Write(arr[i] + " ");
            }

            Console.WriteLine();

            Array.Reverse(arr);
            Console.WriteLine("Array elements in reverse order : ");
            for(int i = 0; i < arr.Length; i ++)
            {
                Console.Write(arr[i] + " ");
            }
        }
    }
}