using myDB.Model;
using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Project_part2.Pages1
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // הקוד יפעל רק כשהדף נשלח כטופס (כלומר, כשהמשתמש לוחץ על "הרשמה")
            if (Request.HttpMethod == "POST")
            {         
                // יצירת אובייקט משתמש חדש לפי הנתונים שהוזנו בטופס ההרשמה
                DateTime birthDate;
                if (DateTime.TryParse(Request.Form["Birthday"], out birthDate))
                {
                    User newUser = new User(
                        Request.Form["UserName"],
                        Request.Form["password"],
                        Request.Form["firstName"],
                        Request.Form["lastName"],
                        Request.Form["email"],
                        Request.Form["phone"],
                        birthDate, 
                        Request.Form["gender"],
                        Request.Form["address"]);

                    // ניסיון להכניס את המשתמש החדש למסד הנתונים
                    int n = Helper.Insert(newUser);

                    // אם הערך שחזר הוא -1, זה אומר ששם המשתמש תפוס – מציג הודעת שגיאה
                    if (n == -1)
                    {
                        registerError.InnerText = "Username is already Taken!";
                    }
                    else
                    {
                        // אם ההכנסה הצליחה – מעביר את המשתמש לדף ההתחברות
                        Response.Redirect("Login.aspx");
                    }
                }
             
            }
        }
    }
}

