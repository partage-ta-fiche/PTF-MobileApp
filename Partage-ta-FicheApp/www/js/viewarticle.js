
  document.addEventListener("DOMContentLoaded", (event) => {
    const params = new URLSearchParams(location.search);

    const articleid = params.get("articleid");

    fetch(`https://partage-ta-fiche.fr/api/viewarticle/${articleid}`)
    
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        let formed = data.response[0];
        console.log(formed.title);

        const section = document.createElement("section");
        section.classList.add("center");

        const h1 = document.createElement("h1");
        h1.innerHTML = formed.title;
        section.appendChild(h1);

        const body = document.createElement("div");
        body.innerHTML = formed.body;
        section.appendChild(body);
        console.error();
      })
      .catch((error) => console.log(error));
  });
