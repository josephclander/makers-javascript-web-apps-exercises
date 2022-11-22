class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, (result) => {
        this.display(result);
        console.log(result);
      });
    });
  }

  display(repoData) {
    const name = document.querySelector('#repo-name');
    const description = document.querySelector('#repo-description');
    const info = document.querySelector('#info');

    name.textContent = repoData.name;
    description.textContent = repoData.description;

    const image = document.createElement('IMG');
    image.setAttribute('src', `${repoData.organization.avatar_url}`);
    image.setAttribute('width', '300px');
    info.appendChild(image);
  }
}

module.exports = GithubView;
