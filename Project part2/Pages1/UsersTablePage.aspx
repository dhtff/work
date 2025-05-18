<%@ Page Title="" Language="C#" MasterPageFile="~/Pages1/MasterP.Master" AutoEventWireup="true" CodeBehind="UsersTablePage.aspx.cs" Inherits="Project_part2.Pages1.UsersTablePage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
    th, td {
        border: 1px solid #444; /* גבול כהה סביב התאים */
        padding: 10px; /* רווח פנימי בתאים */
        text-align: center; /* יישור התוכן במרכז */
        background-color: aliceblue;
    }
</style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
        <!-- מקום להצגת הטבלה או תוכן אחר -->
<div id="tableDiv" runat="server"></div>
</asp:Content>
