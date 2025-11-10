
using System;

namespace Assignment
{
    abstract class Shape
    {
        public abstract double CalcArea();
        public void DisplayArea()
        {
            Console.WriteLine($"Area : {CalcArea()}");
        }
    }
    class Circle : Shape
    {
        public double area;
        public double radius { get; set;}

        public Circle(double rad)
        {
            radius = rad;
        }

        public override double CalcArea()
        {
            area = Math.PI * radius * radius;
            return Math.Round(area, 2);
        }
    }

    class Rectangle : Shape
    {
        public double area;
        public double length { get; set;}
        public double breadth { get; set;}

        public Rectangle(double length, double breadth)
        {
            this.length = length;
            this.breadth = breadth;
        }

        public override double CalcArea()
        {
            area = length * breadth;
            return Math.Round(area, 2);
        }
    }

    internal class Program
    {
        
        static void Main(string[] args)
        {

            Circle c1 = new Circle(10);
            Circle c2 = new Circle(20);

            Rectangle r1 = new Rectangle(20, 40);
            Rectangle r2 = new Rectangle(10, 10);

            c1.DisplayArea();
            c2.DisplayArea();

            r1.DisplayArea();
            r2.DisplayArea();
        }
    }
}
