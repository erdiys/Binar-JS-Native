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
    let itemHtml;
    const getCars = await fetch('https://api-car-rental.binaracademy.org/customer/car');
    const result = await getCars.json();

    const data = Binar.populateCars(result);
    
    const resultData = data.filter((value, index) => {
        return value.capacity > inputData.jumlahPenumpang &&
        value.typeDriver === inputData.tipeDriver
    })

    resultData.forEach(element => {
        itemHtml += `
            <div class="col-4 text-center">
                <div class="card">
                    <img class="img-fluid card-img-top" src="${element.image}" />
                    <div class="card-body">
                        <h3 class="card-text">${element.name}</h3>
                    </div>
                </div>
            </div>
        `
    })
    document.getElementById('searchresult').innerHTML = itemHtml;

    console.log(itemHtml)
}