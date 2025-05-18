using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Project_part2.Pages1
{
    public partial class Logout : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Session["userName"] = "Visitor";
            Session["Login"] = false;
            Session["Admin"] = false;
            Response.Redirect("HomePage.aspx");

        }
    }
}