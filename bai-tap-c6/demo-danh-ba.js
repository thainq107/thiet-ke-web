// Demo chương 6: danh bạ lớp
// Mỗi đoạn đánh số ứng với một mục trên trang học liệu.

// 1. Chọn phần tử trên trang
const formThem = document.getElementById("formThem");
const oLoc = document.getElementById("oLoc");
const danhBa = document.getElementById("danhBa");
const dem = document.querySelector("#dem");

// 2. Đọc dữ liệu ban đầu từ chuỗi JSON
const chuoiBanDau = '[{"ten":"Lê Hà","soDT":"0912345678","nhom":"Nhóm 1"},' +
  '{"ten":"Trần Minh","soDT":"0987654321","nhom":"Nhóm 2"}]';
const banBe = JSON.parse(chuoiBanDau);

// 3. Tạo phần tử mới và gắn vào trang
function veDanhBa() {
  const tu = oLoc.value.trim().toLowerCase();
  danhBa.innerHTML = "";
  for (let i = 0; i < banBe.length; i++) {
    if (!banBe[i].ten.toLowerCase().includes(tu)) {
      continue;
    }
    const li = document.createElement("li");
    li.textContent = banBe[i].ten + " - " + banBe[i].soDT + " ";
    const nhom = document.createElement("span");
    nhom.classList.add("nhom");
    nhom.textContent = "(" + banBe[i].nhom + ") ";
    const nut = document.createElement("button");
    nut.textContent = "Xoá";
    nut.dataset.viTri = i;
    li.append(nhom, nut);
    danhBa.append(li);
  }
  dem.textContent = "Có " + banBe.length + " người";
}
veDanhBa();

// 4. Sự kiện input: vẽ lại mỗi lần gõ
oLoc.addEventListener("input", veDanhBa);

// 5. Một trình xử lý cho cả danh sách
danhBa.addEventListener("click", function (e) {
  const nut = e.target.closest("button");
  if (nut === null) {
    return;
  }
  banBe.splice(Number(nut.dataset.viTri), 1);
  veDanhBa();
});

// 6. Kiểm tra form trước khi thêm
function laSoDT(chuoi) {
  if (chuoi.length !== 10 || chuoi[0] !== "0") {
    return false;
  }
  for (const kt of chuoi) {
    if (kt < "0" || kt > "9") {
      return false;
    }
  }
  return true;
}

formThem.addEventListener("submit", function (e) {
  e.preventDefault();
  const ten = formThem.hoTen.value.trim();
  const soDT = formThem.soDT.value.trim();
  const nhom = formThem.nhom.value;
  const loi = { hoTen: "", soDT: "", nhom: "" };
  if (ten === "") {
    loi.hoTen = "Chưa nhập họ tên";
  }
  if (!laSoDT(soDT)) {
    loi.soDT = "Cần 10 chữ số, bắt đầu bằng 0";
  }
  if (nhom === "") {
    loi.nhom = "Chưa chọn nhóm";
  }

  document.getElementById("loiHoTen").textContent = loi.hoTen;
  document.getElementById("loiSoDT").textContent = loi.soDT;
  document.getElementById("loiNhom").textContent = loi.nhom;
  formThem.hoTen.classList.toggle("loi", loi.hoTen !== "");
  formThem.soDT.classList.toggle("loi", loi.soDT !== "");
  formThem.nhom.classList.toggle("loi", loi.nhom !== "");

  if (loi.hoTen !== "") {
    formThem.hoTen.focus();
  } else if (loi.soDT !== "") {
    formThem.soDT.focus();
  } else if (loi.nhom !== "") {
    formThem.nhom.focus();
  } else {
    themNguoi(ten, soDT, nhom);
  }
});

// 7. Thêm thành công: cập nhật dữ liệu rồi vẽ lại
function themNguoi(ten, soDT, nhom) {
  banBe.push({ ten: ten, soDT: soDT, nhom: nhom });
  veDanhBa();
  formThem.reset();
  const tb = document.getElementById("thongBao");
  tb.textContent = "Đã thêm " + ten;
  setTimeout(function () {
    tb.textContent = "";
  }, 2000);
}

// 8. Xuất dữ liệu thành JSON
document.getElementById("nutXuat").addEventListener("click", function () {
  document.getElementById("ketQua").textContent = JSON.stringify(banBe, null, 2);
});
