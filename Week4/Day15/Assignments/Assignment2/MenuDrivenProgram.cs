using System;

namespace Assignment2
{
    class Program
    {
        static void EvenNumbers()
        {
            for (int i = 0; i < 10; i++)
            {
                if(i % 2 == 0)
                {
                    Console.Write($"{i} ");
                    //i += 2;
                }
            }
        }

        static void OddNumbers()
        {
            for (int i = 0; i < 10; i++)
            {
                if (i % 2 != 0)
                {
                    Console.Write($"{i} ");
                    //i += 2;
                }
            }
        }

        static void FiveMultiples()
        {
            Console.WriteLine("5 Multiples : ");
            for (int i = 1; i <= 10; i++)
            {
                Console.Write($"{i * 5} ");
                //i += 2;
                
            }
        }

        static void CustomNumbers()
        {
            for (int i = 1; i <= 30; i++)
            {
                if(i % 3 == 0 || i % 5 == 0)
                {
                    Console.Write($"{i} ");
                }
            }
        }

        static void Main(string[] args)
        {
            //Console.WriteLine("Hello, World!");

            // bool isValid = false;
            
            while(true)
            {
                Console.WriteLine();
                Console.WriteLine("Choose from the Below Options : ");
                Console.WriteLine("1.Even Numbers\n2.Odd Numbers\n3.Five Multiples\n4.Custom Numbers\n5.Exit");
                int numSelected = Convert.ToInt32(Console.ReadLine());
                
                switch(numSelected)
                {
                    case 1:
                        // Function call
                        EvenNumbers();
                        break;
    
                    case 2:
                        // Function call
                        OddNumbers();
                        break;
    
                    case 3:
                        // Function call
                        FiveMultiples();
                        break;
    
                    case 4:
                        // Function call
                        CustomNumbers();
                        break;
    
                    case 5:
                        // Function call
                        return;
    
                    default:
                        Console.WriteLine("Invalid selection");
                        break;
                }
            }
        }
    }
}
