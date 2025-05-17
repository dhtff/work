<%@ Page Title="" Language="C#" MasterPageFile="~/Pages1/MasterP.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Project_part2.Pages1.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../CSS/Register&Login.css" rel="stylesheet" />
    <script src="../JS/JavaScript.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <%--יצירת טופס הLOGIN--%>

  <header>
      <h1 style="text-align: center;">הצטרפו לאתר</h1>
  </header>
  <form id="loginForm" runat="server" method="post">

      <table>

          <tr>
              <%--USERNAME--%>
              <td>
                  <label for="username">שם משתמש:</label></td>
              <td>
                  <input type="text" id="username" name="username" value="<%= Request.Form["username"] %>" oninput="validateUsername()">
              <td class="error" id="usernameError"></td>
          </tr>
          <tr>
              <%-- סיסמא--%>
              <td>
                  <label for="password">סיסמא:</label></td>
              <td>
                  <input type="password" id="password" name="password" value="<%= Request.Form["password"] %>" oninput="validatePassword()">
              <td class="error" id="passwordError"></td>
          </tr>

      </table>

      <!-- Submit and reset button -->
      <div class="form-container">
          <input type="submit" value="כניסה" onclick="return ValidateLogin()">
          <input type="reset" onclick="clearErrorMessages();"> 
          <div id="loginMsg" runat="server"></div>
      </div>

  </form>

</asp:Content>
