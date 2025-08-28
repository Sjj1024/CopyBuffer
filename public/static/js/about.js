document.addEventListener('DOMContentLoaded', function () {
    const showAll = document.querySelector('.ButtonGhost_button__yXpPC')
    const showBox = document.querySelector('.Team_teamMembers__YrDp4')
    showAll.addEventListener('click', function () {
        showBox.classList.add('Team_teamMembersShowingAll__mqEv6')
        showAll.style.display = 'none'
    })
})
