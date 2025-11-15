
using System;

namespace Assignment
{
    interface IPayment
    {
        void Pay(double amount);
    }
    
    public class CreditCardPayment : IPayment
    {
        public long CardNumber {get; set;}
        public string CardHolderName {get; set;}
        public DateTime ExpiryDate {get; set;}
        public double Amount {get; set;}
        
        public CreditCardPayment(long cardNumber, string cardHolderName, DateTime expiryDate)
        {
            CardNumber = cardNumber;
            CardHolderName = cardHolderName;
            ExpiryDate = expiryDate;
        }
        
        public void Pay(double amount)
        {
            Amount = amount;
            Console.WriteLine($"Credit Card Payment\nCard Number : {CardNumber}\nCard Holder Name : {CardHolderName}\nExpiry Date : {ExpiryDate.ToString("dd-MM-yyyy")}\nAmount : {Amount}");
            Console.WriteLine("------------------------");
        }
    }
    
    public class UPIPayment : IPayment
    {
        public string UPI_ID {get; set;}
        public string BankName {get; set;}
        public double Amount {get; set;}
        
        public UPIPayment(string upiId, string bankName)
        {
            UPI_ID = upiId;
            BankName = bankName;
        }
        
        public void Pay(double amount)
        {
            Amount = amount;
            Console.WriteLine($"UPI ID Payment\nUPI ID : {UPI_ID}\nBank Name : {BankName}\nAmount : {Amount}");
            Console.WriteLine("------------------------");
        }
    }
    
    public class PaypalPayment : IPayment
    {
        public string EmailId {get; set;}
        public double Amount {get; set;}
        
        public PaypalPayment(string emailId)
        {
            EmailId = emailId;
        }
        
        public void Pay(double amount)
        {
            Amount = amount;
            Console.WriteLine($"PayPal Payment\nEmail ID : {EmailId}\nAmount : {Amount}");
            Console.WriteLine("------------------------");
        }
    }
    
    public class Program
    {
        public static void Main(String[] args)
        {
            IPayment creditCard1 = new CreditCardPayment(10632700, "Ananya", new DateTime(2025, 10, 31));
            creditCard1.Pay(10000);
            
            IPayment creditCard2 = new CreditCardPayment(17282300, "Kavya", new DateTime(2025, 09, 16));
            creditCard2.Pay(5000);
            
            IPayment UPIPayment1 = new UPIPayment("Kajal@upi", "SBI");
            UPIPayment1.Pay(25000);
            
            IPayment UPIPayment2 = new UPIPayment("Gautham@upi", "HDFC");
            UPIPayment2.Pay(18000);
            
            IPayment Paypal1 = new PaypalPayment("yamuna@gmail.com");
            Paypal1.Pay(20000);
            
            IPayment Paypal2 = new PaypalPayment("abhinaya@gmail.com");
            Paypal2.Pay(16000);
        }
    }
}
