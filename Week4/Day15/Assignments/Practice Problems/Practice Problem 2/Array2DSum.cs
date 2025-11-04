using System;

namespace Assignment
{
    class Program
    {
        public static void Main(string[] args)
        {
            int[,] arr2d;

            Console.WriteLine("Enter no. of rows : ");
            int rows = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter no. of cols : ");
            int cols = Convert.ToInt32(Console.ReadLine());

            arr2d = new int[rows, cols];

            int sum = 0;

            Console.WriteLine("Enter the matrix elements : ");

            for(int i = 0; i < rows; i ++)
            {
                for(int j = 0; j < cols; j ++)
                {
                    arr2d[i,j] = Convert.ToInt32(Console.ReadLine());
                    sum += arr2d[i,j];
                }
            }

            Console.WriteLine($"Sum of the matrix : {sum}");
        }
    }
}