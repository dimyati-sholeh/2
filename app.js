const ppForm = document.getElementById("ppForm");
const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar")
const tampil = document.getElementById("tampilContainer");

const hasilPP = JSON.parse(localStorage.getItem("pp")) || [];

const addPP =(panjang, lebar, hasil) => {
    hasilPP.push({
        panjang,
        lebar,
        hasil
    });

    localStorage.setItem("pp", JSON.stringify(hasilPP));

    return {panjang, lebar, hasil};
}

const buatPP = ({panjang, lebar, hasil}) => {
    const divPP = document.createElement("div");
    const panjang1 = document.createElement("p");
    const lebar1 = document.createElement("p");
    const hasil1 = document.createElement("h2");
    const hr = document.createElement("hr");

    panjang1.innerHTML = "panjang :" + panjang;
    lebar1.innerHTML = "lebar :" + lebar;
    hasil1.innerHTML = "Luas Persegi Panjang : " + hasil;

    divPP.append(panjang1, lebar1, hasil1, hr);
    tampil.appendChild(divPP);
};

hasilPP.forEach(buatPP);
ppForm.onsubmit = e => {
    e.preventDefault();

    const vPanjang = panjang.value;
    const vLebar = lebar.value;
    const Luas = (vPanjang*vLebar);

    const PPBaru = addPP(
        vPanjang,
        vLebar,
        Luas
    );

    buatPP(PPBaru);

    panjang.value = "";
    lebar.value = "";

};


