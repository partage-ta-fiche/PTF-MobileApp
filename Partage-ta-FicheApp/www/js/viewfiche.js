const params = new URLSearchParams(location.search)

const ficheid = params.get('ficheid')
console.log(ficheid)

document.addEventListener('load', () => {
    fetch('/api/lastarticle')
  .then(response => response.json())
  .then(data => {
    // Mise à jour de l'élément "recent" avec les données reçues
    recentElement.innerHTML = data.articles.map(article => {
        return `<h2>${article.title}</h2><p>${article.content}</p>`;
    });
  })
  .catch(error => console.error(error));
})