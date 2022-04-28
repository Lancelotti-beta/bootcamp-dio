const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const btnCat = document.getElementById('change');
const imgCat = document.getElementById('cat');

const loadCat = async ()=> {
    try {
        const data = await fetch(BASE_URL)
            .then((data) => data.json());
    
        return data.webpurl;
        
    } catch (error) {
        console.log(error.message);
    }
};

const loadingImg = async () => {
    imgCat.src = await loadCat();
}

btnCat.addEventListener('click', loadingImg);

loadingImg();