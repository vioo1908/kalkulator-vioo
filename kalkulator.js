$(function () {
    let input1;
    let input2;
    let operasiSelected = null;

  $(".tombol-angka").click(function () {
    let angka = $(this).text();
    // alert("Hallo JQuery! kamu menekan angka " + angka);

    // cek jika sudah ada selected operasi
    if(operasiSelected == null){
      // operasi masih kosong --> isi input1
    let angkaSebelumnya = $("#input1").text();
    if (angkaSebelumnya == "...") angkaSebelumnya = "";
    input1 = angkaSebelumnya + angka;
    $("#input1").text(angkaSebelumnya + angka);
    } else{
      // sudah ada operasi selected
      let angkaSebelumnya = $("#input2").text();
      if (angkaSebelumnya == "...") angkaSebelumnya = "";
      input2 = angkaSebelumnya + angka;
      $("#input2").text(input2);
    }
  });

  $(".tombol-operasi").click(function () {
      let operasiSebelumnya = $("#operasi-selected").text();
      let newOperasi = $(this).text();
      if (operasiSelected == null) {
      // operasi baru
      $("#operasi-selected").text(newOperasi);
      operasiSelected = newOperasi;
    } else {
      // input1 diisi dengan hasil
      $("#input1").text($("#hasil").text());

      // input2 dikosongkan
      $("#input2").text("...");

      // replace operasi
      $("#operasi-selected").text(newOperasi);
      operasiSelected = newOperasi;
    }  
  });

  $("#btn-hitung").click(function () {
    input1 = parseInt($("#input1").text());
    input2 = parseInt($("#input2").text());
    let hasil;

    if (operasiSelected == "+") {
        hasil = input1 + input2;
    } else if (operasiSelected == "-") {
        hasil = input1 - input2;
    } else if (operasiSelected == "x") {
        hasil = input1 * input2;
    } else if (operasiSelected == "/") {
        hasil = input1 / input2;
    } else if (operasiSelected == "^") {
        hasil = input1 ^ input2;
    } else if (operasiSelected == "%") {
        hasil = input1 % input2;
    } else {
      alert(`Belum ada handle untuk operasi ${operasiSelected}`);
    }
    $("#hasil").text(hasil);
  });
});  