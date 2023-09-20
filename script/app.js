const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("#form");
const text = document.querySelector(".marquee");
const searchInp = form.querySelector("#search")
const selectInp = form.querySelector("#select")
const rus = selectInp.querySelector("#rus")



fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => renderData(data))

function renderData(data){
    const fragment = document.createDocumentFragment();
    data.forEach(countries => {
        // console.log(countries);
        text.innerHTML += `<img class="mark-img" src="${countries.flags.png}" alt="flag image" />`
        const div = document.createElement("div")
        div.classList = "card";
        div.innerHTML = `
            <img class="first-img" src="${countries.flags.png}" alt="flag image" />
            <div class="card-title">
                <p>Country Name: ${countries.name.common}</p>
                <p>Abbreviation: ${countries.altSpellings[0]}</p>
                <p>Spelling: ${countries.altSpellings[1]}</p>
                <p>Capital: ${countries.capital}</p>
                <a href="./about.html?cardId=${countries.cca2}" class="learn-more">Learn More </a>
            </div>
        `;
            fragment.appendChild(div);
        });
        wrapper.appendChild(fragment);
    }


form.addEventListener("submit", (e) => {
    e.preventDefault();
    wrapper.innerHTML = "";

    fetch(`https://restcountries.com/v3.1/name/${searchInp.value}`)
        .then(response => response.json())
        .then(data => renderData(data))
})
