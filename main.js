const LinksSocialMedia = {
  github: 'Matheus-Breciani',
  youtube: 'Matheus Breciani',
  facebook: 'Matheus Breciani',
  instagram: 'brecianih',
  twitter: 'ubreciani'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.login
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
