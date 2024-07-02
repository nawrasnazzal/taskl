async function getInfo() {
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const info = await response.json();
    const recipes = info.recipes;

    const result = recipes.map(function(ele) {
        return `
            <div class="info">
                <h2>${ele.title}</h2>
                <img src="${ele.image_url}" alt="${ele.title}">
            </div>
        `;
    }).join('');

    document.querySelector(".pizza").innerHTML = result;
}

getInfo();