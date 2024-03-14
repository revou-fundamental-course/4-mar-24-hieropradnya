// Mendapatkan tombol "Hitung BMI"
var tombolHitungBMI = document.querySelector("button[type='submit']");

// Menambahkan event listener pada tombol "Hitung BMI"
tombolHitungBMI.addEventListener("click", function (event) {
  // Mencegah perilaku default dari tombol submit (untuk menghindari pengiriman form)
  event.preventDefault();

  // Mendapatkan nilai berat badan dan tinggi badan dari input
  var berat = parseFloat(document.getElementById("berat").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // Ubah tinggi ke meter

  // Memeriksa apakah nilai berat dan tinggi valid
  if (isNaN(berat) || isNaN(tinggi)) {
    alert("Mohon masukkan berat badan dan tinggi badan yang valid");
  } else {
    // Menghitung BMI
    var bmi = (berat / (tinggi * tinggi)).toFixed(1);
    var kategori;
    var antara;
    var penjelasan;

    // Pengkondisian untuk merubah elemen html sesuai skor BMI
    if (bmi < 18.5) {
      kategori = "Kekurangan Berat Badan";
      antara = "sama dengan atau kurang dari 18.5";
      penjelasan = "Anda memerlukan lebih banyak asupan nutrisi untuk mencapai berat badan yang sehat.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      kategori = "Ideal";
      antara = "antara 18.5 dan 25";
      penjelasan = "Berat badan Anda berada dalam kisaran sehat. Pertahankan gaya hidup sehat Anda!";
    } else if (bmi >= 25 && bmi <= 29.9) {
      kategori = "Kelebihan Berat Badan";
      antara = "antara 25 dan 30";
      penjelasan = "Anda mungkin perlu memperbaiki pola makan dan rutin berolahraga untuk mencapai berat badan yang sehat.";
    } else {
      kategori = "Obesitas";
      antara = "sama dengan atau lebih dari 30";
      penjelasan = "Anda memiliki risiko tinggi terhadap berbagai masalah kesehatan. Konsultasikan dengan dokter untuk penanganan yang tepat.";
    }

    // Mengubah teks di dalam elemen dengan id "bmiResult" menjadi hasil BMI yang dihitung
    document.getElementById("bmiKategori").innerText = kategori;
    document.getElementById("bmiSkor").innerText = bmi;
    document.getElementById("bmiAnda").innerText = "Anda memiliki berat yang " + kategori.split(" ")[0];
    document.getElementById("bmiAntara").innerText = "Hasil BMI " + antara;
    document.getElementById("bmiPenjelasan").innerText = penjelasan;
  }
});
