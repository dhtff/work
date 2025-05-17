// מחכה שכל תוכן הדף ייטען לפני שמריצים את הקוד
document.addEventListener("DOMContentLoaded", function () {

    // מוצא את האלמנט של זוקו (התמונה שמגיבה לעכבר)
    const zukoContainer = document.getElementById("ZukoAnimation-container");

    // מוצא את האלמנט של האש (הלהבה שנראית ביריקת האש)
    const fire = document.getElementById("ZukoAnimation-fire");

    // בודק ששני האלמנטים קיימים לפני שממשיך
    if (zukoContainer && fire) {

        // כשמעבירים את העכבר מעל זוקו
        zukoContainer.addEventListener("mouseenter", () => {

            // מציג את הלהבה
            fire.style.display = "block";

            // מפעיל את האנימציה של יריקת האש
            fire.style.animation = "fire-shoot 0.6s ease-out forwards";
        });

        // כשמעבירים את העכבר החוצה מזוקו
        zukoContainer.addEventListener("mouseleave", () => {

            // מסתיר את הלהבה
            fire.style.display = "none";

            // מבטל את האנימציה (כדי שאפשר יהיה להפעיל אותה שוב אחר כך)
            fire.style.animation = "none";
        });
    }
});
