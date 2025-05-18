<%@ Page Title="" Language="C#" MasterPageFile="~/Pages1/MasterP.Master" AutoEventWireup="true" CodeBehind="Gallery.aspx.cs" Inherits="Project_part2.Pages1.Gallery" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../CSS/Gallery.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
            <!--טבלת תמונות 3 על 2-->
    <table>
        <tr>
            <td><img src="../Pictures/zzzzuko.jpg" /></td>
            <td>
                <!--קישור מהתמונה של אנג לאתר חיצוני-->
                <a href="https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender" target="_blank">
                    <img src="../Pictures/aaang.jpg" />
                </a>
            </td>
            <td><img src="../Pictures/toph.jpg" /></td>
        </tr>
        <tr>
            <td><img src="../Pictures/uncleiroh.jpeg" /></td>
            <td><img src="../Pictures/sokkaaa.jpg" /></td>
            <td><img src="../Pictures/katara.jpg" /></td>

        </tr>
    </table>
</asp:Content>
