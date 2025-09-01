export const menuOpen = (open: string = 'block') => {
    console.log('vue menuOpen')
    const menuBox: any = document.querySelector('.Nav_menuContentPanel__R3KkS')
    if (menuBox) {
        menuBox.style.display = open
    }
}
