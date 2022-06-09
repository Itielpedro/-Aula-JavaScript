const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';



const catBtn = document.getElementById('change-cat');



const catImg = document.getElementById('cat');





const getCats =  async() => {

    try {

        const data = await fetch(BASE_URL)

        const json = await data.json()

        // json[0] --> porque tem dois itens e o valor da url está na primeira

        //poderiamos ter colocado também json.0.url

        const result = json[0]['url']

        return result;



    } catch (e) {

        console.log(e.message);

    }

};



const loadImg = async () => {

   

    catImg.src = await getCats();



}



catBtn.addEventListener('click', loadImg);



loadImg();
