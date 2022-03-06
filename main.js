function getGiHubProfileInfos(){
    const url = 'https://api.github.com/users/penasnipute'

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio 
    })

}

getGiHubProfileInfos()

myProjectsContainer.innerHTML =''


function getReposInfo(){
    const url = 'https://api.github.com/users/penasNipute/repos'

    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(singleData => {
            
            console.log(singleData)
            myProjectsContainer.innerHTML +=`
            <div class="myProjectsSingle">
                <div class="repoTitle">
                    <img src="assets/folder.svg" alt="icone folder">
                    <a href="${singleData.html_url}" target="_blank" id="repoName" class="repoName">${singleData.name}</a>
                </div>
                <p id="repoDescription" class="repoDescription">${singleData.description}</p>
                <div class="reactionContainer">
                    <div class="repoReactions">
                        <div class="stars">
                            <img src="assets/star.svg" alt="icone star">
                            <p id="stargazers_count" class="number">${singleData.stargazers_count}</p>
                        </div>
                        <div class="branch">
                            <img src="assets/git-branch.svg" alt="icone git-branch">
                            <p id="forks_count" class="number">${singleData.forks_count}</p>
                        </div>
                    </div>
                    <div class="stack">
                        <div class="colorStack"></div>
                        <p id="language" class="stackName">${singleData.language}</p>
                    </div>        
                </div>
            </div>
        <!-- myProjectsSingle -->`
        
        });
        
        // stargazers_count.textContent = data[13].stargazers_count
        // forks_count.textContent = data[13].forks_count
    })
}

getReposInfo()