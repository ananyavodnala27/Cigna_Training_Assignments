using System;

namespace Assignment
{
    public class NegativeNumberException : ApplicationException
    {
        public NegativeNumberException(string message) : base(message) { }
    }
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
                    if (arr[i] < 0)
                    {
                        throw new NegativeNumberException("Array elements should be greater than 0.");
                    }
                }
            }
            catch(NegativeNumberException ex)
            {
                Console.WriteLine($"Exception message : {ex.Message}");
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
