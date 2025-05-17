// using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace myDB.Model
{
    public static class Helper
    {
        public const string DBName = "GuyDB.mdf";
        public const string tblName = "tblUsers";
        public const string conString = @"Data Source=(localDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\"
                                        + DBName + ";Integrated Security=True";


        // Gets A table from the data base acording to the SELECT Command in SQLStr;
        // Returns DataTable with the Table.
        public static DataSet RetrieveTable(string SQLStr)

        {
            // connect to DataBase
            SqlConnection con = new SqlConnection(conString);

            // Build SQL Query
            SqlCommand cmd = new SqlCommand(SQLStr, con);

            // Build DataAdapter
            SqlDataAdapter ad = new SqlDataAdapter(cmd);

            // Build DataSet to store the data
            DataSet ds = new DataSet();

            // Get Data form DataBase into the DataSet
            ad.Fill(ds, tblName);

            return ds;
        }


        // Gets A table from the data base, creates and returns the HTML string
        // for the table to be printed In the HTML page
        public static string BuildUsersTable(DataTable dt)
        {
            // Open the HTML tag for the table based on the CSS class called usersTable
            // התלמיד יגדיר את העיצב לטבלה בקובץ העיצוב
            string str = "<table class='usersTable' align='center'>";

            // Open the first Row
            str += "<tr>";

            // Create the first table row with the name of all the table columns
            foreach (DataColumn column in dt.Columns)
                str += "<th>" + column.ColumnName + "</th>";

            // Close the first Row
            str += "</tr>";

            // Create the rows based on all the data rows
            foreach (DataRow row in dt.Rows)
            {
                // Open the HTML Row
                str += "<tr>";

                // For each row it creates a cell for each column
                foreach (DataColumn column in dt.Columns)
                    str += "<td>" + row[column] + "</td>";

                // Close the HTML Row
                str += "</tr>";
            }

            // Close the HTML Table
            str += "</table>";
            return str;
        }


        // The Method recieve a user objects and insert it to the Database as new row. 
        // if the user is already taken the method will return -1.
        public static int Insert(User user)
        {
            // התחברות למסד הנתונים
            SqlConnection con = new SqlConnection(conString);

            // בניית פקודת SQL
            string SQLStr = $"SELECT * FROM {tblName} WHERE Username Like '{user.UserName}'";
            SqlCommand cmd = new SqlCommand(SQLStr, con);

            // בניית DataSet
            DataSet ds = new DataSet();

            // טעינת סכימת הנתונים
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(ds, tblName);

            if (ds.Tables[tblName].Rows.Count > 0)
                return -1;

            // בניית השורה להוספה
            DataRow dr = ds.Tables[tblName].NewRow();
            dr["userName"] = user.UserName;
            dr["password"] = user.PassWord;
            dr["admin"] = user.Admin;
            dr["firstName"] = user.FirstName;
            dr["lastName"] = user.LastName;
            dr["tel"] = user.Phone;
            dr["email"] = user.Email;
            dr["Birthday"] = user.Birthday.ToShortDateString();
            dr["Gender"] = user.Gender.ToString();
            dr["address"] = user.Address.ToString();
            ds.Tables[tblName].Rows.Add(dr);

            // עדכון הדאטה סט בבסיס הנתונים
            SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
            adapter.UpdateCommand = builder.GetInsertCommand();
            int n = adapter.Update(ds, tblName);

            return n;
        }

       
    }
}
