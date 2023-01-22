window.addEventListener("load", (event) => {
  fetch("https://partage-ta-fiche.fr/api/lastarticle")
    .then((response) => response.json())
    .then((data) => {
      let article = data.response;
      const articleView = document.querySelector(".articleview");

      article
        .forEach((article) => {
          const articleElem = document.createElement("article");
          articleView.appendChild(articleElem);

          const articleCard = document.createElement("div");
          articleCard.classList.add("articlecard");
          articleElem.appendChild(articleCard);

          const header = document.createElement("header");
          articleCard.appendChild(header);

          const title = document.createElement("h1");
          title.classList.add("titlearticle");
          title.innerText = article.title;
          header.appendChild(title);

          const desc = document.createElement("p");
          desc.innerText = article.desc;
          articleCard.appendChild(desc);

          const viewArticle = document.createElement("div");
          viewArticle.classList.add("viewarticle");
          articleCard.appendChild(viewArticle);

          const link = document.createElement("a");
          link.href = `/view/article/${article.id}`;
          link.innerText = "Voir l'article";
          link.classList.add("centered");
          viewArticle.appendChild(link);
        })
        

      // Envoi de la requête à l'API pour récupérer les dernières fiches
      fetch("https://partage-ta-fiche.fr/api/lastfiche")
        .then((response) => response.json())
        .then((data) => {
          let articles = data.response;

          const recentDiv = document.querySelector(".recent");

          articles.forEach((article) => {
            const ficherDiv = document.createElement("div");
            ficherDiv.classList.add("ficher");

            const title = document.createElement("h2");
            title.classList.add("titlefiche");
            title.innerText = article.title;
            ficherDiv.appendChild(title);

            const image = document.createElement("img");
            image.src = `https://partage-ta-fiche.fr/store/img/fiches/${article.id}.png`;
            image.alt = `Image fiche : ${article.title}`;
            image.classList.add("imagefiche", "centered");
            ficherDiv.appendChild(image);

            const viewfDiv = document.createElement("div");
            viewfDiv.classList.add("viewf");

            const link = document.createElement("a");
            link.href = `/view/view.html?ficheid=${article.id}`;
            link.innerText = "Voir la fiche";
            viewfDiv.appendChild(link);
            ficherDiv.appendChild(viewfDiv);

            recentDiv.appendChild(ficherDiv);
          });
        })
        .catch((error) => console.error(error));
    });
});
