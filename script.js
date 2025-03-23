document.addEventListener("DOMContentLoaded", function () {
    var countDownDate = null;
    var launchTime = document.querySelector(".launch-time");
    var learnMoreBtn = document.querySelector("button");
    var datePicker = document.getElementById("date-picker");

  
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

       
        var timerElement = document.getElementById("timer");
        timerElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;


    }, 1000);

  
    learnMoreBtn.addEventListener("click", function() {
        window.location.href = "https://example.com/learn-more";
    });

});
// Biến và chọn phần tử

// Mã bắt đầu bằng cách khai báo một số biến và chọn các phần tử HTML bằng cách sử dụng document.querySelector và document.getElementById:

// countDownDate: biến để lưu trữ ngày đã chọn dưới dạng số mili giây
// launchTime: phần tử HTML có lớp launch-time
// learnMoreBtn: phần tử HTML nút
// datePicker: phần tử HTML đầu vào có id date-picker
// Sự kiện

// Mã thêm một sự kiện vào phần tử datePicker, sự kiện này lắng nghe sự thay đổi giá trị đầu vào. Khi người dùng chọn một ngày mới, sự kiện này được kích hoạt và mã:

// Tạo một đối tượng Date mới từ chuỗi ngày đã chọn bằng cách sử dụng new Date(datePicker.value)
// Thiết lập biến countDownDate thành dấu thời gian của ngày đã chọn bằng cách sử dụng getTime()
// Hàm khoảng thời gian

// Mã thiết lập một hàm khoảng thời gian bằng cách sử dụng setInterval, hàm này chạy mỗi giây (1000 mili giây). Hàm này:

// Kiểm tra xem countDownDate có phải là null hay không; nếu có, nó trả về mà không làm gì cả
// Tính toán thời gian hiện tại bằng cách sử dụng new Date().getTime()
// Tính toán khoảng cách giữa thời gian hiện tại và ngày đã chọn bằng cách sử dụng countDownDate - now
// Nếu khoảng cách nhỏ hơn 0 (tức là ngày đã chọn đã qua), nó:
// Xóa khoảng thời gian bằng cách sử dụng clearInterval(x)
// Cập nhật các phần tử HTML với giá trị "00" cho ngày, giờ, phút và giây
// Cập nhật phần tử HTML với id launch-message với giá trị "LAUNCH TIME!"
// Hiển thị phần tử HTML với id launch-btn bằng cách sử dụng style.display = "block"
// Nếu khoảng cách lớn hơn 0, nó:
// Tính toán số ngày, giờ, phút và giây còn lại bằng cách sử dụng các phép toán khác nhau
// Cập nhật các phần tử HTML với giá trị tính toán
// Phần tử HTML

// Mã giả định rằng có các phần tử HTML với các id sau:

// Days
// Hours
// Minutes
// Second
// launch-message
// launch-btn
// Các phần tử này được cập nhật với giá trị tính toán hoặc tin nhắn dựa trên trạng thái của bộ đếm ngược.