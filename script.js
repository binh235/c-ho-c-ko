function chooseYes() {
  document.getElementById("result").innerText = "Bạn đã chọn Có!";
}

function moveNoButton() {
  // Lấy nút "Không" từ HTML
  const noButton = document.getElementById("noButton");

  // Tạo vị trí ngẫu nhiên trong vùng chứa
  const container = document.querySelector('.container');
  const maxX = container.clientWidth - noButton.clientWidth;
  const maxY = container.clientHeight - noButton.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Đặt vị trí của nút "Không" với giá trị ngẫu nhiên
  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
}
