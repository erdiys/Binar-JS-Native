// DOM (Document Object Model)
const tipeDriverEl = document.getElementById('tipedriver');
const tanggalEl = document.getElementById('tanggal');
const waktuEl = document.getElementById('waktu');
const penumpangEl = document.getElementById('penumpang');
const cariEl = document.getElementById('cari');
const changeData = document.querySelectorAll('#search select,input');

const inputData = {
    tipeDriver: '',
    tanggal: '',
    waktu: '',
    jumlahPenumpang: '',
}

// trigger
cariEl.addEventListener('click', e => {
    inputData.tipeDriver = tipeDriverEl.value;
    inputData.tanggal = tanggalEl.value;
    inputData.waktu = waktuEl.value;
    inputData.jumlahPenumpang = penumpangEl.value;
    
    getData(inputData);
})

changeData.forEach(value => {
    value.addEventListener('change', e => {
        e.target.style = 'background:#C3FF93'
    })
});

async function getData(inputData) {
    let itemHtml = '';
    const getCars = await fetch('https://api-car-rental.binaracademy.org/customer/car');
    const result = await getCars.json();

    const data = Binar.populateCars(result);
    
    const resultData = data.filter((value, index) => {
        return value.capacity > inputData.jumlahPenumpang &&
        value.typeDriver === inputData.tipeDriver
    })

    resultData.forEach(element => {
        itemHtml += `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card h-100">
                    <img class="img-fluid card-img-top" src="${element.image}" />
                    <div class="card-body d-flex justify-content-end flex-column mb-3">
                        <h4 class="card-text text-medium">${element.name}</h4>
                        <h3 class="card-text">RP ${element.price.toLocaleString()} / hari</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul class="align-top">
                            <li id="orang">${element.capacity} orang</li>
                            <li id="transmisi">Manual</li>
                            <li id="tahun">Tahun 2000</li>
                        </ul>
                        <a href="#" class="btn btn-success mt-auto w-100 align-self-center">Pilih Mobil</a>
                    </div>
                </div>
            </div>
        `
    })
    document.getElementById('searchresult').innerHTML = itemHtml;

    console.log(resultData)
}