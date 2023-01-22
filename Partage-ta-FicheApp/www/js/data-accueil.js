document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  cordova.plugin.http.setHeader("*", "Header", "Value");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://partage-ta-fiche.fr/api/lastfiche", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var articles = data.response;
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
      } else {
        var errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
        errorMessage.classList.add("error-message");
        document.body.appendChild(errorMessage);
      }
    }
    xhr.send();
  };
 
}
