
using System;

namespace Assignment
{
    public abstract class Shape
    {
        public abstract double CalcArea();
        
        public void ShowArea()
        {
            Console.WriteLine($"Area :  {CalcArea()}");
        }
    }

    public class Circle : Shape
    {
        public double Radius { get; set; }
        
        public double Area;
        
        public Circle(double r)
        {
            Radius = r;
        }
        
        public override double CalcArea()
        {
            return Area = Math.PI * Radius * Radius;
        }
        
    }
    
    public class Rectangle : Shape
    {
        public double Length {get; set;}
        public double Breadth {get; set;}
        public double Area;
        
        public Rectangle(double length, double breadth)
        {
            Length = length;
            Breadth = breadth;
        }
        
        public override double CalcArea()
        {
            return Area = Length * Breadth;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Shape c1 = new Circle(20);
            c1.ShowArea();
            
            Shape r1 = new Rectangle(10, 20);
            r1.ShowArea();
        }
    }
}
