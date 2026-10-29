// Dữ liệu thư viện viết bằng JSON, đặt trong cặp dấu huyền ` ` để viết được nhiều dòng.
// Tự thêm 2 sách nữa vào cuối mảng (S09, S10). Nhớ dấu phẩy giữa các sách và không để dấu phẩy sau sách cuối.
const chuoiSach = `[
  { "ma": "S01", "ten": "Dế Mèn phiêu lưu ký", "tacGia": "Tô Hoài", "nam": 1941, "theLoai": ["Thiếu nhi", "Văn học"], "soLuong": 3 },
  { "ma": "S02", "ten": "Số đỏ", "tacGia": "Vũ Trọng Phụng", "nam": 1936, "theLoai": ["Văn học", "Trào phúng"], "soLuong": 2 },
  { "ma": "S03", "ten": "Nhà giả kim", "tacGia": "Paulo Coelho", "nam": 1988, "theLoai": ["Văn học"], "soLuong": 4 },
  { "ma": "S04", "ten": "Đắc nhân tâm", "tacGia": "Dale Carnegie", "nam": 1936, "theLoai": ["Kỹ năng"], "soLuong": 0 },
  { "ma": "S05", "ten": "Lược sử thời gian", "tacGia": "Stephen Hawking", "nam": 1988, "theLoai": ["Khoa học"], "soLuong": 1 },
  { "ma": "S06", "ten": "Tôi thấy hoa vàng trên cỏ xanh", "tacGia": "Nguyễn Nhật Ánh", "nam": 2010, "theLoai": ["Thiếu nhi", "Văn học"], "soLuong": 2 },
  { "ma": "S07", "ten": "Sapiens: Lược sử loài người", "tacGia": "Yuval Noah Harari", "nam": 2011, "theLoai": ["Khoa học", "Lịch sử"], "soLuong": 1 },
  { "ma": "S08", "ten": "Clean Code", "tacGia": "Robert C. Martin", "nam": 2008, "theLoai": ["Công nghệ", "Kỹ năng"], "soLuong": 2 }
]`;

// Ba hàm ngày cho sẵn, dùng nguyên văn, không cần sửa.
// Ngày viết dạng chuỗi "yyyy-mm-dd", giống giá trị của ô <input type="date">.

// Ngày hôm nay theo giờ của máy, ví dụ "2026-11-03".
function homNay() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

// Ngày sau ngày "chuoi" n ngày: congNgay("2026-11-28", 5) cho "2026-12-03".
function congNgay(chuoi, n) {
  const p = chuoi.split("-");
  const d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]) + n);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

// Số ngày từ ngày "tu" đến ngày "den": soNgayGiua("2026-11-03", "2026-11-10") cho 7.
function soNgayGiua(tu, den) {
  const a = tu.split("-");
  const b = den.split("-");
  const ngayA = new Date(Number(a[0]), Number(a[1]) - 1, Number(a[2]));
  const ngayB = new Date(Number(b[0]), Number(b[1]) - 1, Number(b[2]));
  return Math.round((ngayB - ngayA) / 86400000);
}
