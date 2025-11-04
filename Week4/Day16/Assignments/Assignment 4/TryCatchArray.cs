using System;

namespace Assignment
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] arr;
            Console.WriteLine("Enter the size of array : ");
            int size = Convert.ToInt32(Console.ReadLine());
            arr = new int[size];

            Console.WriteLine("Enter the array elements : ");

            try
            {
                for (int i = 0; i < size; i++)
                {
                    arr[i] = Convert.ToInt32(Console.ReadLine());
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine($"Exception message : {ex.Message}");
            }
            finally
            {
                Console.WriteLine("Program terminated.");
            }

        }
    }
}
