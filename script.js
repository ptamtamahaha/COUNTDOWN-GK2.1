document.addEventListener("DOMContentLoaded", function () {
    var countDownDate = null;
    var launchTime = document.querySelector(".launch-time");
    var learnMoreBtn = document.querySelector("button");
    var datePicker = document.getElementById("date-picker");

    // Set the countdown date when the date picker changes
    datePicker.addEventListener("change", function() {
        var selectedDate = new Date(datePicker.value);
        countDownDate = selectedDate.getTime();
    });

    var x = setInterval(function () {
        if (countDownDate === null) {
            return;
        }

        var now = new Date().getTime();
        var distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("Days").innerHTML = "00";
            document.getElementById("Hours").innerHTML = "00";
            document.getElementById("Minutes").innerHTML = "00";
            document.getElementById("Second").innerHTML = "00";
            document.getElementById("launch-message").innerHTML = "LAUNCH TIME!";
            document.getElementById("launch-btn").style.display = "block";
            return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("Days").innerHTML = days;
        document.getElementById("Hours").innerHTML = hours;
        document.getElementById("Minutes").innerHTML = minutes;
        document.getElementById("Second").innerHTML = seconds;

        launchTime.classList.add("shake");
        setTimeout(() => {
            launchTime.classList.remove("shake");
        }, 200);

        // Add a countdown timer to a specific element
        var timerElement = document.getElementById("timer");
        timerElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;


    }, 1000);

    // Add an event listener to the learn more button
    learnMoreBtn.addEventListener("click", function() {
        window.location.href = "https://example.com/learn-more";
    });

});