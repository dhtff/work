using myDB.Model; // שימוש במחלקות מהמודול של מסד הנתונים
using System;
using System.Collections.Generic;
using System.Data; // לעבודה עם DataSet ו-DataTable
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Project_part2.Pages1
{
    public partial class UsersTablePage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // בדיקה אם המשתמש אינו אדמין – אם לא, מעבירים אותו לדף הבית
            if ((bool)Session["Admin"] == false)
            {
                Response.Redirect("HomePage.aspx");
            }

            // הטעינה הראשונית של הדף (רק בפעם הראשונה, לא כשיש postback כמו לחיצה על כפתור)
            if (!IsPostBack)
            {
                // שאילתת SQL לשליפת כל המשתמשים מהטבלה
                string SQLStr = "SELECT * FROM " + Helper.tblName;

                // שליפת התוצאה לתוך DataSet
                DataSet ds = Helper.RetrieveTable(SQLStr);

                // קבלת הטבלה מתוך ה־DataSet
                DataTable dt = ds.Tables[Helper.tblName];

                // בניית טבלת HTML מתוך הנתונים
                string table = Helper.BuildUsersTable(dt);

                // הצגת הטבלה ב־div בדף
                tableDiv.InnerHtml = table;
            }
        }
    }
}
