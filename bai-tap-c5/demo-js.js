// Demo JavaScript cơ bản. Mở DevTools, chọn tab Console để xem kết quả.

// 1. In ra Console. Dòng bắt đầu bằng // là chú thích, máy bỏ qua
console.log("Xin chào JavaScript");

// 2. Biến: let gán lại được, const thì không
const tenCuaHang = "Hiệu sách Trang Giấy";
let soLuong = 3;
soLuong = soLuong + 1;
console.log(tenCuaHang, "- số lượng:", soLuong);

// 3. Kiểu dữ liệu: số, chuỗi, đúng sai. typeof cho biết kiểu
const gia = 85000;
const tenSach = "Lập trình Web";
const conHang = true;
console.log(typeof gia, typeof tenSach, typeof conHang);

// 4. Toán tử toán học. Dấu + giữa chuỗi và số là ghép chuỗi
const thanhTien = gia * soLuong;
console.log("Thành tiền: " + thanhTien + " đồng");
console.log(10 % 3);
console.log("2" + 3);
console.log("2" * 3);

// 5. So sánh: dùng === để so cả giá trị lẫn kiểu
console.log(5 == "5");
console.log(5 === "5");

// 6. Logic: && là "và", || là "hoặc", ! là "không"
const laThanhVien = true;
console.log(thanhTien >= 300000 && laThanhVien);
console.log(thanhTien >= 500000 || laThanhVien);

// 7. Câu điều kiện: xét từ trên xuống, gặp điều kiện đúng thì dừng
let giamGia;
if (thanhTien >= 500000) {
  giamGia = 10;
} else if (thanhTien >= 300000) {
  giamGia = 5;
} else {
  giamGia = 0;
}
console.log("Giảm giá: " + giamGia + "%");

// 8. Vòng lặp for: khởi tạo; điều kiện; bước tăng
for (let i = 1; i <= 3; i++) {
  console.log("Lần lặp thứ " + i);
}

// 9. Hàm: đặt tên cho một việc, gọi lại bao nhiêu lần cũng được
function tinhThanhTien(donGia, sl) {
  return donGia * sl;
}
console.log(tinhThanhTien(50000, 2));
console.log(tinhThanhTien(120000, 1));

// 10. Mảng: nhiều giá trị trong một biến, vị trí đánh số từ 0
const gioHang = [85000, 120000, 45000];
gioHang.push(60000);
let tong = 0;
for (let i = 0; i < gioHang.length; i++) {
  tong = tong + gioHang[i];
}
console.log("Món đầu tiên: " + gioHang[0]);
console.log("Số món: " + gioHang.length + ", tổng: " + tong);

// 11. Đối tượng: gom thông tin của một thứ vào một biến
const sach = {
  ten: "Lập trình Web",
  gia: 85000,
  tacGia: "Nhóm FIT"
};
console.log(sach.ten + " giá " + sach.gia);

// 12. Bắt lỗi: lỗi trong try không làm dừng chương trình
try {
  console.log(bienChuaKhaiBao);
} catch (loi) {
  console.log("Có lỗi: " + loi.message);
}
console.log("Chương trình vẫn chạy tiếp");
