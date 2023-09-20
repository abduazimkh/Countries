const cardId = new URLSearchParams(window.location.search).get("cardId");
const aboutWrapper = document.querySelector(".about__wrapper");

console.log(cardId);

fetch(`https://restcountries.com/v3.1/alpha?codes=${cardId}`)
    .then(response => response.json())
    .then(data => renderData(data))

function renderData(data){
    const fragment = document.createDocumentFragment();
    data.forEach(countries => {
        console.log(countries);
        const div = document.createElement("div")
        div.classList = "about-main-wrapper"
        div.innerHTML = `
        <div class="images">
            <img class="first-img" src="${countries.flags.png}" alt="flag image" />
            <img class="last-img" src="${countries.coatOfArms.png}" alt="flag image" />
        </div>
        <div class="about-wrapper-title">
            <h1>Country Name: ${countries.name.common}</h1>
            <strong>Abbreviation: ${countries.altSpellings[0]}</strong>
            <p>Spelling: ${countries.altSpellings[1]}</p>
            <p>Capital: ${countries.capital}</p>
            <p>Borders: ${countries.borders}</p>
            <p>Language: ${countries.languages.uzb ? countries.languages.uzb || countries.languages.rus : countries.languages.ara }</p>
            <p>Сontinents: ${countries.continents}</p>
            <p>Subregion: ${countries.subregion}</p>
            <p>Idd: ${countries.idd.root + countries.idd.suffixes}</p>
            <p>StartOfWeek: ${countries.startOfWeek}</p>
            <p>Status: ${countries.status}</p>
            <p>Tld: <mark>${countries.tld}</mark></p>
            <p>TimeZone: ${countries.timezones}</p>


            <a href="./index.html" class="learn-more">Home Page</a>
        </div>
        `;
        fragment.appendChild(div);
    });
    aboutWrapper.appendChild(fragment);
}