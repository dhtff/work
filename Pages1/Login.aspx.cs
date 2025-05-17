using myDB.Model; // שימוש במודלים של מסד הנתונים
using System; // ספרייה בסיסית
using System.Collections.Generic; // לעבודה עם רשימות ומבנים מורכבים
using System.Data; // מאפשר עבודה עם DataSet ו־DataTable
using System.Linq; // פעולות חכמות על אוספים
using System.Web; // עבודה עם פרוטוקול HTTP
using System.Web.UI; // בסיס לדפי Web Forms
using System.Web.UI.WebControls; // שליטה על רכיבי ASP.NET כמו טפסים וכפתורים

namespace Project_part2.Pages1 // מרחב שמות (namespace) לקבצים של הפרויקט
{
    public partial class Login : System.Web.UI.Page // המחלקה של עמוד ההתחברות, יורשת מ־Page
    {
        protected void Page_Load(object sender, EventArgs e) // פונקציה שרצה בכל טעינה של הדף
        {
            if (Request.HttpMethod == "POST") // אם הדף נטען עם שליחת טופס (ולא סתם רענון)
            {
                string userName = Request.Form["UserName"]; // לוקח את שם המשתמש מתוך הטופס
                string password = Request.Form["Password"]; // לוקח את הסיסמה מתוך הטופס

                if (string.IsNullOrWhiteSpace(userName) && string.IsNullOrWhiteSpace(password))
                {
                    Session["userName"] = "Visitor";
                    Session["Login"] = false;
                    Session["Admin"] = false;
                    loginMsg.InnerHtml = "יש למלא שם משתמש וסיסמה";
                    return; // מפסיקים פה את ההמשך כי זה שגיאה
                }

                string SQLStr = "SELECT * FROM tblUsers " + $"WHERE username = '{userName}' AND password = '{password}' "; // יוצר שאילתה שמחפשת משתמש עם שם וסיסמה מתאימים

                DataSet ds = Helper.RetrieveTable(SQLStr); // מריץ את השאילתה ומחזיר תוצאה בטבלה

                if (ds.Tables[0].Rows.Count > 0) // אם נמצאה שורה אחת לפחות – המשתמש קיים
                {
                    Session["userName"] = userName; // שומר את שם המשתמש בזיכרון זמני של האתר
                    Session["Login"] = true; // מציין שהמשתמש מחובר
                    Session["Admin"] = ds.Tables[0].Rows[0]["Admin"]; // שומר אם המשתמש הוא אדמין לפי המסד
                    Response.Redirect("HomePage.aspx"); // מעביר את המשתמש לדף הבית
                }
                else // אם לא נמצאה שורה – המשתמש לא קיים
                {
                    Session["userName"] = "Visitor"; // המשתמש ייחשב כאורח
                    Session["Login"] = false; // המשתמש לא מחובר
                    Session["Admin"] = false; // המשתמש אינו אדמין
                    loginMsg.InnerHtml = "לא מזהה את השם משתמש או את הסיסמא"; // מציג הודעת שגיאה בטופס
                }
            }
        }
    }
}
