// Demo chương 5, buổi 2: câu lạc bộ thể thao
// Mỗi đoạn đánh số ứng với một mục trên trang học liệu.

const phutTap = [45, 60, 0, 30, 90, 0, 75];
const lichTap = ["bơi", "chạy", "bơi", "cầu lông", "chạy", "bơi"];

// 1. Lặp khi chưa biết trước số lần
let tongPhut = 0;
let soNgay = 0;
while (tongPhut < 150 && soNgay < phutTap.length) {
  tongPhut = tongPhut + phutTap[soNgay];
  soNgay++;
}
console.log(soNgay + " ngày, " + tongPhut + " phút");

// 2. for...of và for...in
let soNgayNghi = 0;
for (const phut of phutTap) {
  if (phut === 0) {
    soNgayNghi++;
  }
}
console.log("Số ngày nghỉ: " + soNgayNghi);

const diemRenLuyen = { Hà: 8, Minh: 6, Quân: 9 };
for (const ten in diemRenLuyen) {
  console.log(ten + " được " + diemRenLuyen[ten] + " điểm");
}

// 3. Đối tượng làm bảng đếm
const soBuoi = {};
for (const mon of lichTap) {
  if (soBuoi[mon] === undefined) {
    soBuoi[mon] = 0;
  }
  soBuoi[mon] = soBuoi[mon] + 1;
}
for (const mon in soBuoi) {
  console.log(mon + ": " + soBuoi[mon] + " buổi");
}
console.log(Object.keys(soBuoi).length + " môn khác nhau");

// 4. Xử lý chuỗi
const tenNhap = "  Nguyễn THU Hà  ";
const tenChuan = tenNhap.trim().toLowerCase();
console.log("[" + tenChuan + "]");
console.log(tenChuan.includes("thu"));

const maThe = "CLB0123";
let soChuSo = 0;
for (let i = 0; i < maThe.length; i++) {
  if (maThe[i] >= "0" && maThe[i] <= "9") {
    soChuSo++;
  }
}
console.log(maThe + " có " + soChuSo + " chữ số");

// 5. Sắp xếp mà giữ mảng gốc
const thanhTich = [12.5, 11.8, 13.1, 12.0];
const xepHang = thanhTich.slice();
xepHang.sort(function (a, b) {
  return a - b;
});
console.log("Xếp hạng: " + xepHang.join(" < "));
console.log("Mảng gốc: " + thanhTich.join(", "));

// 6. Tìm vị trí và xoá
const doiBong = ["Hà", "Minh", "Quân", "Lan"];
console.log(doiBong.indexOf("Quân"));
console.log(doiBong.indexOf("Tùng"));
const viTri = doiBong.findIndex(function (ten) {
  return ten.length > 3;
});
console.log("Vị trí tên dài đầu tiên: " + viTri);
doiBong.splice(1, 1);
console.log(doiBong.join(", "));

// 7. Hàm trả về đối tượng
function thongKePhut(mang) {
  let nhieuNhat = mang[0];
  let tong = 0;
  for (const p of mang) {
    tong = tong + p;
    if (p > nhieuNhat) {
      nhieuNhat = p;
    }
  }
  return { tong: tong, nhieuNhat: nhieuNhat };
}
const kq = thongKePhut(phutTap);
console.log(kq.tong + " phút, nhiều nhất " + kq.nhieuNhat);

// 8. Báo lỗi và bắt lỗi
function datSan(soNguoi) {
  if (!Number.isInteger(soNguoi)) {
    throw new Error("Số người phải là số nguyên");
  }
  if (soNguoi > 10) {
    throw new Error("Sân chỉ nhận tối đa 10 người");
  }
  return "Đã đặt sân cho " + soNguoi + " người";
}
const cacLanDat = [4, 12, 2.5];
for (const n of cacLanDat) {
  try {
    console.log(datSan(n));
  } catch (loi) {
    console.log("Không đặt được: " + loi.message);
  } finally {
    console.log("  xong yêu cầu " + n);
  }
}

// 9. Đổi dữ liệu thành chuỗi
const lich = { mon: "bơi", buoi: ["thứ 2", "thứ 5"] };
const chuoi = JSON.stringify(lich);
console.log(chuoi);
console.log(typeof chuoi);
const docLai = JSON.parse(chuoi);
console.log(docLai.buoi[1]);
