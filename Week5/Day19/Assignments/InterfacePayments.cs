
using System;

namespace Assignment
{
    
    interface IPayment
    {
        void pay(double amount); 
    }

    class CreditCardPayment : IPayment
    {
        public string cardNumber { get; set; }
        public string cardHolder { get; set; }

        public CreditCardPayment(string cardNumber, string cardHolder)
        {
            this.cardNumber = cardNumber;
            this.cardHolder = cardHolder;
        }
        public void pay(double amt)
        {
            Console.WriteLine($"Payment Details -\nPayment Method : Credit Card\nCard Number : {cardNumber}\nCard Holder : {cardHolder}\nAmount : {amt}");
            Console.WriteLine("-----------------------------------------------------");
        }
    }

    class UPIPayment : IPayment
    {
        public string paymentID { get; set; }

        public UPIPayment(string paymentID)
        {
            this.paymentID = paymentID;
        }
        public void pay(double amt)
        {
            Console.WriteLine($"Payment Details -\nPayment Method : UPI\nPayment ID : {paymentID}\nAmount : {amt}");
            Console.WriteLine("-----------------------------------------------------");
        }
    }

    class PaypalPayment : IPayment
    {
        public string EmailID { get; set; }

        public PaypalPayment(string EmailID)
        {
            this.EmailID = EmailID;
        }
        public void pay(double amt)
        {
            Console.WriteLine($"Payment Details -\nPayment Method : PayPal\nEmail ID : {EmailID}\nAmount : {amt}");
            Console.WriteLine("-----------------------------------------------------");
        }
    }
    internal class Program
    {
        
        static void Main(string[] args)
        {
            IPayment CreditCard1 = new CreditCardPayment("123-456-789", "Ananya");
            CreditCard1.pay(10000);

            IPayment UPIPayment1 = new UPIPayment("abc89");
            UPIPayment1.pay(5000);

            IPayment PaypalPayment1 = new PaypalPayment("kate12@gmail.com");
            PaypalPayment1.pay(8000);
        }
    }
}
