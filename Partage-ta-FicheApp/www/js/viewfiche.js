document.addEventListener("DOMContentLoaded", (event) => {
  const params = new URLSearchParams(location.search);

  const ficheid = params.get("ficheid");
  console.log(ficheid);
  console.log(`https://partage-ta-fiche.fr/api/viewfiche/${ficheid}`)
  fetch(`https://partage-ta-fiche.fr/api/viewfiche/${ficheid}`)
    .then((response) => response.json())
    .then((data) => {
      let formed = data.response[0];
      
      const section = document.createElement("section");
      section.classList.add("main");
      document.querySelector("main").appendChild(section);

      const titleDiv = document.createElement("div");
      titleDiv.classList.add("titlem", "centered");
      section.appendChild(titleDiv);

      const h1 = document.createElement("h1");
      h1.innerHTML = `Fiche : ${formed.title}`;
      titleDiv.appendChild(h1);

      const h2 = document.createElement("h2");
      h2.innerHTML = `Fait par : ${formed.author}`;
      titleDiv.appendChild(h2);

      const flexboxDiv = document.createElement("div");
      flexboxDiv.classList.add("flexbox");
      section.appendChild(flexboxDiv);

      const ficheDiv = document.createElement("div");
      ficheDiv.classList.add("fiche");
      flexboxDiv.appendChild(ficheDiv);

      const ficheAnchor = document.createElement("a");
      ficheAnchor.href = `https://partage-ta-fiche.fr/store/img/fiches/${formed.id}.png`;
      ficheAnchor.target = "_blank";
      ficheDiv.appendChild(ficheAnchor);

      const ficheImg = document.createElement("img");
      ficheImg.src = `https://partage-ta-fiche.fr/store/img/fiches/${formed.id}.png`;
      ficheImg.alt = "Fiche d'exemple";
      ficheAnchor.appendChild(ficheImg);

      const descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("description");
      flexboxDiv.appendChild(descriptionDiv);

      const descriptionContentDiv = document.createElement("div");
      descriptionContentDiv.classList.add("description-content");
      descriptionDiv.appendChild(descriptionContentDiv);

      const descriptionH1 = document.createElement("h1");
      descriptionH1.innerHTML = "Description";
      descriptionContentDiv.appendChild(descriptionH1);

      const descriptionP = document.createElement("p");
      descriptionP.innerHTML = formed.description;
      descriptionContentDiv.appendChild(descriptionP);

      const br = document.createElement("br");
      descriptionContentDiv.appendChild(br);
      descriptionContentDiv.appendChild(br);

      const accountDiv = document.createElement("div");
      accountDiv.classList.add("account", "centered");
      descriptionDiv.appendChild(accountDiv);

      const img = document.createElement("img");
      img.src = "https://partage-ta-fiche.fr/asset/img/noprofilepicture.png";
      img.alt = `Photo de profil de ${formed.author}`;
      img.classList.add("pp");
      accountDiv.appendChild(img);

      const h1_2 = document.createElement("h1");
      h1_2.innerHTML = formed.author;
      accountDiv.appendChild(h1_2);

      const viewmoreAnchor = document.createElement("a");
      viewmoreAnchor.href = `/view/profile/${formed.authorID}`;
      viewmoreAnchor.innerHTML = `Voir plus de ${formed.author}`;
      viewmoreAnchor.classList.add("viewmore");
      accountDiv.appendChild(viewmoreAnchor);
    })
    .catch((error) => console.log(error));
});
