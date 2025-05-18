<%@ Page Title="" Language="C#" MasterPageFile="~/Pages1/MasterP.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="Project_part2.Pages1.Register" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../CSS/Register&Login.css" rel="stylesheet" />
    <script src="../JS/JavaScript.js"></script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <header>
        <h1 style="text-align: center;">הצטרפו לאתר</h1>
    </header>
    <form id="registerForm" runat="server" method="post">


        <table>
            <tr>
                <%--שם פרטי--%>
                <td>
                    <label for="firstName">שם פרטי:</label></td>
                <td>
                    <input type="text" id="firstName" name="firstName" oninput="validateFirstName()"></td>
                <td class="error" id="firstNameError"></td>
            </tr>
            <tr>
                <%--שם משפחה--%>
                <td>
                    <label for="lastName">שם משפחה:</label></td>
                <td>
                    <input type="text" id="lastName" name="lastName" oninput="validateLastName()"></td>
                <td class="error" id="lastNameError"></td>
            </tr>
            <tr>
                <%--איממיל--%>
                <td>
                    <label for="email">אימייל:</label></td>
                <td>
                    <input type="email" id="email" name="email" oninput="validateEmail()"></td>
                <td class="error" id="emailError"></td>
            </tr>
            <tr>
                <%--מספר טלפון--%>
                <td>
                    <label for="phone">מספר טלפון:</label></td>
                <td>
                    <input type="tel" id="phone" name="phone" oninput="validatePhone()"></td>
                <td class="error" id="phoneError"></td>
            </tr>
            <tr>
                <%--שם משתמש--%>
                <td>
                    <label for="username">שם משתמש:</label></td>
                <td>
                    <input type="text" id="username" name="username" oninput="validateUsername()"></td>
                <td class="error" id="usernameError"></td>
            </tr>
            <tr>
                <%--סיסמא--%>
                <td>
                    <label for="password">סיסמא:</label></td>
                <td>
                    <input type="password" id="password" name="password" oninput="validatePassword()"></td>
                <td class="error" id="passwordError"></td>
            </tr>
            <tr>
                <%--אימות הסיסמא--%>
                <td>
                    <label for="valdPassword">אשר סיסמא:</label></td>
                <td>
                    <input type="password" id="valdPassword" name="valdPassword" oninput="validateValdPassword()"></td>
                <td class="error" id="valdPasswordError"></td>
            </tr>
            <tr>
                <%--תאריך לידה--%>
                <td>
                    <label for="birthdate">תאריך לידה:</label></td>
                <td>
                    <input type="date" id="birthdate" name="birthdate" onchange="validatebirthdate()"></td>
                <td class="error" id="birthdateError"></td>
            </tr>
            <tr>
                <%--מגדר--%>
                <td>
                    <label for="gender">מגדר:</label></td>
                <td>
                    <input type="radio" id="male" name="gender" value="male" oninput="validateGender()">
                    זכר
                   
                    <input type="radio" id="female" name="gender" value="female" oninput="validateGender()">
                    אישה
                </td>
                <td class="error" id="genderError"></td>
            </tr>
            <tr>
                <%--דמות מועדפת--%>
                <td>
                    <label for="Favcharacter">דמות אהובה:</label></td>
                <td>
                    <select id="Favcharacter" name="Favcharacter" onchange="validateFavcharacter()">
                        <option value="iroh">אירו</option>
                        <option value="aang">אנג</option>
                        <option value="zuko">זוקו</option>
                        <option value="katara">קטרה</option>
                        <option value="sokka">סוקה</option>
                        <option value="toph">טוף</option>
                    </select>
                </td>
                <td class="error" id="FavcharacterError"></td>
            </tr>
            <tr>
                <td>
                    <label for="address">כתובת:</label></td>
                <td>
                    <textarea id="address" name="address" rows="3" oninput="validateAddress()"></textarea></td>
                <td class="error" id="addressError"></td>
            </tr>
            <tr>
                <td>
                    <label for="ellement">אלמנט אהוב:</label></td>
                <td>
                    <input type="checkbox" id="air" name="ellements" value="air" oninput="validateellements()">
                    אוויר
                   
                    <input type="checkbox" id="water" name="ellements" value="water" oninput="validateellements()">
                    מים
                   
                    <input type="checkbox" id="earth" name="ellements" value="earth" oninput="validateellements()">
                    אדמה
                   
                    <input type="checkbox" id="fire" name="ellements" value="fire" oninput="validateellements()">
                    אש
                   
                    <input type="checkbox" id="other" name="ellements" value="other" oninput="validateellements()">אחר(מתכת, דם..)
                </td>
                <td class="error" id="ellementsError"></td>
            </tr>
        </table>

        <!-- Submit and reset button -->
        <div class="form-container">
            <input type="submit" value="הצטרף" onclick="return validateForm()" />
             <input type="reset" onclick="clearErrorMessages();"> 

             <div id="registerError" runat="server"></div>
        </div>

       


    </form>


</asp:Content>
