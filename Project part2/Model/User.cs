using System;

namespace myDB.Model
{
    public class User
    {
        public int UserId;
        public string UserName;
        public string PassWord;
        public string FirstName;
        public string LastName;
        public string Email;
        public string Phone;
        public DateTime Birthday;
        public string Gender;
        public string Address;
        public bool Admin;

        public User(string UserName, string PassWord, 
            string FirstName, string LastName, 
            string Email, string Phone, DateTime Birthday, 
            string Gender, string Address) 
        {
            this.UserName = UserName;
            this.PassWord = PassWord;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Email = Email;
            this.Phone = Phone;
            this.Birthday = Birthday;
            this.Gender = Gender;
            this.Address = Address;
            this.UserId = -1;
            this.Admin = false;
        }
    }
    
}
