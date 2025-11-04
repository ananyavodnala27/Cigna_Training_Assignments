using System;

namespace Assignment
{
    internal class Program
    {
        static double Area(double radius)
        {
            double area = Math.PI * radius * radius;
            Console.WriteLine("Area of Circle: ");
            return area;
        }

        static float Area(float length, float breadth)
        {
            float area = length * breadth;
            Console.WriteLine("Area of Rectangle: ");
            return area;
        }

        static float Area(float length)
        {
            float area = length * length;
            Console.WriteLine("Area of Square: ");
            return area;
        }

        static void Main(string[] args)
        {
            Console.WriteLine(Area(4.5));
            Console.WriteLine(Area(20, 10));
            Console.WriteLine(Area(10));
        }
    }
}
