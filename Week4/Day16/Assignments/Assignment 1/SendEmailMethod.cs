using System;

namespace Assignment
{
    internal class Program
    {

        static void SendEmail(string recipient, string message, string sender = "senders@gmail.com", string subject = "", bool IsImportant = false)
        {
            Console.WriteLine("--------- Email Details ---------");
            Console.WriteLine($"From : {sender}");
            Console.WriteLine($"To : {recipient}");
            Console.WriteLine($"Subject of email : {subject}");
            Console.WriteLine($"Message of email : {message}");
            Console.WriteLine($"Email is important : {IsImportant}");
        }
        static void Main(string[] args)
        {

            SendEmail("xyz@gmail.com", "This Wednesday is a holiday!");
            SendEmail("abc@gmail.com", "This Wednesday is a holiday!", "sender1@gmail.com", "Holiday Announcement", true);

        }
    }
}
