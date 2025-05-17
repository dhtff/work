// פונקציה לאימות שם משתמש
function validateUsername() {
    var username = document.getElementById("username").value; // מקבל את הערך משדה שם המשתמש
    var usernameError = document.getElementById("usernameError"); // מקבל את אלמנט השגיאה עבור שם המשתמש

    // בדיקה אם השדה ריק
    if (username.trim() === "") {
        usernameError.innerHTML = "Username cannot be empty"; // אם השדה ריק, מציג שגיאה
        return false; // מחזיר false אם השם ריק
    }

    // בדיקה אם אורך השם קטן מ-2
    if (username.length < 2) {
        usernameError.innerHTML = "Username must be at least 2 characters"; // אם השם קצר מדי, מציג שגיאה
        return false; // מחזיר false אם השם קצר מדי
    }

    for (var i = 0; i < username.length; i++) {
        if (username[i] === " ") {
            usernameError.innerHTML = "Username must not contain spaces ";
            return false;
        }
    }

    usernameError.innerHTML = ""; // אם לא הייתה שגיאה, מאפס את הודעת השגיאה
    return true; // מחזיר true אם הכל בסדר
}


// פונקציה לאימות סיסמה
function validatePassword() {
    var password = document.getElementById("password").value; // מקבל את הערך משדה הסיסמה
    var passwordError = document.getElementById("passwordError"); // מקבל את אלמנט השגיאה עבור הסיסמה
    var letterRegex = /[a-zA-Z]/; // ביטוי רגולרי לאותיות
    var numberRegex = /\d/; // ביטוי רגולרי למספרים
    var specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/; // ביטוי רגולרי לתו מיוחד
    var code;

    // בדיקה אם השדה ריק
    if (password.trim() === "") {
        passwordError.innerHTML = "Password cannot be empty";
        return false;
    }

    // בדיקה אם אורך הסיסמה קטן מ-6
    if (password.length < 6) {
        passwordError.innerHTML = "Password must contain at least 6 characters";
        return false;
    }

    // בדיקה אם הסיסמה מכילה אותיות
    if (!letterRegex.test(password)) {
        passwordError.innerHTML = "Password must contain at least one letter";
        return false;
    }

    // בדיקה אם הסיסמה מכילה מספרים
    if (!numberRegex.test(password)) {
        passwordError.innerHTML = "Password must contain at least one digit";
        return false;
    }

    // בדיקה אם הסיסמה מכילה תו מיוחד
    if (!specialCharacterRegex.test(password)) {
        passwordError.innerHTML = "Password must contain at least one special character.";
        return false;
    }

    // בדיקה שאין רווחים או תווים בעברית
    for (var i = 0; i < password.length; i++) {
        code = password.charCodeAt(i);
        if (password[i] === " " || (code >= 1424 && code <= 1535)) {
            passwordError.innerHTML = "Password must not contain Hebrew characters or spaces";
            return false;
        }
    }

    passwordError.innerHTML = "";
    return true;
}

// פונקציה לאימות חזרה על סיסמה
function validateValidPassword() {
    var password = document.getElementById("password").value; // מקבל את הערך משדה הסיסמה
    var validPassword = document.getElementById("validPassword").value; // מקבל את הערך משדה חזרה על הסיסמה
    var validPasswordError = document.getElementById("validPasswordError"); // מקבל את אלמנט השגיאה עבור חזרה על הסיסמה

    // בדיקה אם הסיסמאות תואמות
    if (password !== validPassword) {
        validPasswordError.innerHTML = "Passwords do not match";
        return false;
    }

    validPasswordError.innerHTML = "";
    return true;
}

// פונקציה לאימות שם פרטי
function validateFirstName() {
    var firstName = document.getElementById("firstName").value; // מקבל את הערך משדה שם פרטי
    var firstNameError = document.getElementById("firstNameError"); // מקבל את אלמנט השגיאה עבור שם פרטי

    // בדיקה אם השדה ריק
    if (firstName.trim() === "") {
        firstNameError.innerHTML = "First name cannot be empty";
        return false;
    }

    // בדיקה אם השם פרטי מכיל לפחות 2 תווים
    if (firstName.length < 2) {
        firstNameError.innerHTML = "First name must contain at least 2 characters";
        return false;
    }

    // בודקת שהשם הפרטי מכיל רק אותיות בעברית או באנגלית בלי שילוב
    if ((firstName[0] >= 'A' && firstName[0] <= 'Z') || (firstName[0] >= 'a' && firstName[0] <= 'z')) {
        for (var i = 1; i < firstName.length; i++) {
            if (!((firstName[i] >= 'A' && firstName[i] <= 'Z') || (firstName[i] >= 'a' && firstName[i] <= 'z'))) {
                firstNameError.innerHTML = "First name must contain only Hebrew or English characters (no mixes)";
                return false;
            }
        }
    } else if (firstName.charCodeAt(0) >= 1424 && firstName.charCodeAt(0) <= 1535) {
        for (var i = 1; i < firstName.length; i++) {
            if (!(firstName.charCodeAt(i) >= 1424 && firstName.charCodeAt(i) <= 1535)) {
                firstNameError.innerHTML = "First name must contain only Hebrew or English characters (no mixes)";
                return false;
            }
        }
    } else {
        firstNameError.innerHTML = "First name must contain only Hebrew or English characters (no mixes)";
        return false;
    }

    firstNameError.innerHTML = "";
    return true;
}
// פונקציה לאימות שם משפחה
function validateLastName() {
    var lastName = document.getElementById("lastName").value; // מקבל את הערך משדה שם משפחה
    var lastNameError = document.getElementById("lastNameError"); // מקבל את אלמנט השגיאה עבור שם משפחה

    // בדיקה אם השדה ריק
    if (lastName.trim() === "") {
        lastNameError.innerHTML = "Last name cannot be empty";
        return false;
    }

    // בדיקה אם שם משפחה מכיל לפחות 2 תווים
    if (lastName.length < 2) {
        lastNameError.innerHTML = "Last name must contain at least 2 characters";
        return false;
    }

    // בדיקה אם כל התווים הם אותיות מאותו סוג (עברית או אנגלית)
    if ((lastName[0] >= 'A' && lastName[0] <= 'Z') || (lastName[0] >= 'a' && lastName[0] <= 'z')) {
        for (var i = 1; i < lastName.length; i++) {
            if (!((lastName[i] >= 'A' && lastName[i] <= 'Z') || (lastName[i] >= 'a' && lastName[i] <= 'z'))) {
                lastNameError.innerHTML = "Last name must contain only Hebrew or English characters (no mixes).";
                return false;
            }
        }
    } else if (lastName.charCodeAt(0) >= 1424 && lastName.charCodeAt(0) <= 1535) {
        for (var i = 1; i < lastName.length; i++) {
            if (!(lastName.charCodeAt(i) >= 1424 && lastName.charCodeAt(i) <= 1535)) {
                lastNameError.innerHTML = "Last name must contain only Hebrew or English characters (no mixes).";
                return false;
            }
        }
    } else {
        lastNameError.innerHTML = "Last name must contain only Hebrew or English characters (no mixes).";
        return false;
    }

    lastNameError.innerHTML = ""; // אם אין שגיאה, מאפס את השדה
    return true;
}
// פונקציה לאימות טלפון
function validatePhone() {
    var phone = document.getElementById("phone").value; // מקבל את הערך משדה טלפון
    var phoneError = document.getElementById("phoneError"); // מקבל את אלמנט השגיאה עבור טלפון
    var letterRegex = /[a-zA-Z]/; // ביטוי רגולרי לאותיות
    var numberRegex = /\d/; // ביטוי רגולרי למספרים
    var specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/; // ביטוי רגולרי לתו מיוחד

    // בדיקה אם השדה ריק
    if (phone.trim() === "") {
        phoneError.innerHTML = "Phone number cannot be empty"; // אם השדה ריק, מציג שגיאה
        return false; // מחזיר false אם השדה ריק
    }

    // בדיקה אם מכיל אותיות
    if (letterRegex.test(phone)) {
        phoneError.innerHTML = "Phone number must not contain letters"; // אם מכיל אותיות, מציג שגיאה
        return false; // מחזיר false אם יש אותיות
    }

    // בדיקה אם לא מכיל מספרים
    if (!numberRegex.test(phone)) {
        phoneError.innerHTML = "Phone number must contain only numbers, '+' or '-'"; // אם לא מכיל מספרים, מציג שגיאה
        return false; // מחזיר false אם אין מספרים
    }

    // בדיקה אם מכיל תו מיוחד
    if (specialCharacterRegex.test(phone)) {
        phoneError.innerHTML = "Phone number must not contain special characters."; // אם מכיל תו מיוחד, מציג שגיאה
        return false; // מחזיר false אם יש תו מיוחד
    }

    phoneError.innerHTML = ""; // אם לא הייתה שגיאה, מאפס את הודעת השגיאה
    return true; // מחזיר true אם הכל בסדר
}

// פונקציה לאימות דוא"ל
function validateEmail() {
    var email = document.getElementById("email").value; // מקבל את הערך משדה דוא"ל
    var emailError = document.getElementById("emailError"); // מקבל את אלמנט השגיאה עבור דוא"ל
    var at = /@/; // ביטוי רגולרי לתו @
    var dot = /[.]/; // ביטוי רגולרי לתו .

    // בדיקה אם השדה ריק
    if (email.trim() === "") {
        emailError.innerHTML = "Email address cannot be empty"; // אם השדה ריק, מציג שגיאה
        return false; // מחזיר false אם השדה ריק
    }

    // בדיקה אם הדוא"ל מכיל את התו @ ואת התו .
    if (!at.test(email)) {
        emailError.innerHTML = "Email must contain an '@'"; // אם לא מכיל @, מציג שגיאה
        return false; // מחזיר false אם לא מכיל @
    }

    if (!dot.test(email)) {
        emailError.innerHTML = "Email must contain a '.'"; // אם לא מכיל ., מציג שגיאה
        return false; // מחזיר false אם לא מכיל .
    }

    emailError.innerHTML = ""; // אם לא הייתה שגיאה, מאפס את הודעת השגיאה
    return true; // מחזיר true אם הכל בסדר
}
// פונקציה לאימות מגדר
function validateGender() {
    var gender = document.getElementsByName("gender"); // מקבל את כל אלמנטי הרדיו עבור מגדר
    var genderError = document.getElementById("genderError"); // מקבל את אלמנט השגיאה עבור מגדר
    var isChecked = false; // משתנה שמסמן אם נבחר רדיו

    // בדיקה אם נבחר לפחות רדיו אחד
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) { // אם אחד מהרדיואים נבחר
            isChecked = true; // משנה את משתנה isChecked ל-true
            break; // יוצא מהלולאה ברגע שמצאנו רדיו נבחר
        }
    }

    if (!isChecked) {
        genderError.innerHTML = "Please select a gender"; // אם לא נבחר מגדר, מציג שגיאה
        return false; // מחזיר false אם לא נבחר מגדר
    }

    genderError.innerHTML = ""; // אם לא הייתה שגיאה, מאפס את הודעת השגיאה
    return true; // מחזיר true אם הכל בסדר
}

// פונקציה לאימות דמויות מועדפות
function favcharacter() {
    var checkboxes = document.querySelectorAll('input[name="favcharacter"]:checked'); // מקבל את כל ה-checkboxes שנבחרו
    var favcharacterError = document.getElementById("favcharacterError"); // מקבל את אלמנט השגיאה עבור דמויות מועדפות

    // בדיקה אם נבחר לפחות checkbox אחד
    if (checkboxes.length === 0) {
        favcharacterError.innerHTML = "Please select at least one favcharacter"; // אם לא נבחרו, מציג שגיאה
        return false; // מחזיר false אם לא נבחרו דמויות
    }

    favcharacterError.innerHTML = ""; // אם לא הייתה שגיאה, מאפס את הודעת השגיאה
    return true; // מחזיר true אם הכל בסדר
}
// פונקציה לאימות כתובת
function validateAddress() {
    var address = document.getElementById("address").value; // מקבל את הערך משדה כתובת
    var addressError = document.getElementById("addressError"); // מקבל את אלמנט השגיאה עבור כתובת

    // בדיקה אם השדה ריק
    if (address.trim() === "") {
        addressError.innerHTML = "Address cannot be empty"; // אם השדה ריק, מציג שגיאה
        return false; // מחזיר false אם השדה ריק
    }

    addressError.innerHTML = ""; // אם לא הייתה שגיאה, מאפס את הודעת השגיאה
    return true; // מחזיר true אם הכל בסדר
}


// פונקציה לאימות תאריך לידה
function validateBirthdate() {
    var birthdate = document.getElementById("date").value; // מקבל את הערך משדה תאריך הלידה
    var dateError = document.getElementById("dateError"); // מקבל את אלמנט השגיאה עבור תאריך הלידה

    // בדיקה אם השדה ריק
    if (birthdate.trim() === "") {
        dateError.innerHTML = "Birthday cannot be empty"; // אם השדה ריק, מציג שגיאה
        return false; // מחזיר false אם השדה ריק
    }

    dateError.innerHTML = ""; // אם לא הייתה שגיאה, מאפס את הודעת השגיאה
    return true; // מחזיר true אם הכל בסדר
}

// פונקציה לאימות הטופס כולו בעת שליחתו
function validateForm() {
    var res = true;

    res = validateFirstName() && res;
    res = validateLastName() && res;
    res = validateEmail() && res;
    res = validatePhone() && res;
    res = validateUsername() && res;
    res = validatePassword() && res;
    res = validateValidPassword() && res;
    res = validateBirthdate() && res;
    res = validateGender() && res;
    res = validateFavcharacter() && res;
    res = validateAddress() && res;
    res = validateellements() && res;

    return res;
}
// פונקציה לאימות טופס כניסה
function validateLogin() {
  
    var isValid = true; // מתחילים עם isValid = true
    isValid = userNameVal() && isValid; // מאמתים את שם המשתמש
    isValid = passwordVal() && isValid; // מאמתים את הסיסמה
    validateForm()
    return isValid; // מחזירים את תוצאת האימות
}

// פונקציה לניקוי כל הודעות השגיאה מהטופס
function clearErrorMessages() {
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("valdPasswordError").innerHTML = "";
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("favcharacterError").innerHTML = ""; // שונה מ-subjectError
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("birthdateError").innerHTML = ""; // במקום dateError
}
