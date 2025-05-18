using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Project_part2.Pages1
{
    public partial class MasterP : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // אם המשתמש הוא מנהל – מציג את שמו עם כיתוב "(Admin)" ומאפשר גישה לאזורים של אדמין
            // אחרת – מציג את שמו בלבד ומסתיר את האפשרות למנהלים
            if ((bool)Session["Admin"] == true)
            {
                userNamelabel.InnerHtml = "Welcome " + Session["userName"].ToString() + "(Admin)";
                TableLabel.Style.Add("display", "block");
            }
            else
            {
                userNamelabel.InnerHtml = "Welcome " + Session["userName"].ToString();
                TableLabel.Style.Add("display", "none");
            }

            // אם המשתמש מחובר – מציג את כל הקישורים הרלוונטיים למשתמשים רשומים, ומסתיר את ההרשמה וההתחברות
            // אחרת – מסתיר את הקישורים שפתוחים רק למשתמשים מחוברים
            if ((bool)Session["Login"] == true)
            {
                content1.Style.Add("display", "block");
                LogoutLabel.Style.Add("display", "block");
                content2.Style.Add("display", "block");
                gallery.Style.Add("display", "block");
                homepage.Style.Add("display", "block");
                register.Style.Add("display", "none");
                login.Style.Add("display", "none");
            }
            else
            {
                content2.Style.Add("display", "none");
                LogoutLabel.Style.Add("display", "none");
                content1.Style.Add("display", "none");
                gallery.Style.Add("display", "none");
            }
        }
    }
}
