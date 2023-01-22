const xhr = new XMLHttpRequest()



xhr.open("GET", "https://partage-ta-fiche.fr/api/lastarticle", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var article = data.response;
      const articleView = document.querySelector(".articleview");

      article.forEach((article) => {
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
      });
    } else {
      var errorMessage = document.createElement("p");
      errorMessage.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
      errorMessage.classList.add("error-message");
      document.body.appendChild(errorMessage);
    }
  }
};
xhr.send();