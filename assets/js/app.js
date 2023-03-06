const IMG_PATH = "https://doanhaiduy.github.io/api-json/";
fetch("https://doanhaiduy.github.io/api-json/project.json")
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((element) => {
            let project = document.createElement("div");
            project.className = "project-item";
            project.innerHTML = `<div class="project-item">
                    <div class="img"><img src="${IMG_PATH}${element.image}" alt="" /></div>
                    <div class="info info-1">
                        <h2 class="heading">${element.title}</h2>
                    </div>
                    <div class="info-2">
                        <span class ="title">${element.title}</span>
                        <p class="time-code">${element.release_date}</p>
                        <p class="desc">
                            <div class="btn"><a target = "blank" href="https://github.com/Doanhaiduy/Project-js-${element.source}">Source</a></div>
                            <div class="btn"><a target = "blank" href="https://doanhaiduy.github.io/Project-js-${element.live_demo}">Live Demo</a></div>
                        </p>
                    </div>
                </div>`;
            document.querySelector(".list-project").appendChild(project);
        });
    })
    .then(() => {
        const search = document.querySelector(".search");
        const list_movies = document.querySelectorAll(".project-item");
        search.addEventListener("input", () => {
            let ok = false;
            let error = document.querySelector(".no-find");
            const name = search.value.toLowerCase();
            list_movies.forEach((item) => {
                if (item.querySelector("h2").innerText.toLowerCase().includes(name)) {
                    item.style.display = "block";
                    ok = true;
                } else {
                    item.style.display = "none";
                }
            });
        });
    })
    .catch((error) => console.error(error));
