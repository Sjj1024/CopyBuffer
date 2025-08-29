function waitForElement(selector, callback) {
    const observer = new MutationObserver(() => {
        const elements = document.querySelectorAll(selector)
        if (elements.length > 0) {
            observer.disconnect()
            callback(elements)
        }
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    })
}

// 点击菜单标题的处理函数
function menuInit() {
    console.log('menu.js')
    const menuHeaders = document.querySelectorAll('.NavigationMenu_menu__05DPv')
    const menuContents = document.querySelectorAll(
        '.NavigationMenu_content__lo8BS'
    )

    // 点击菜单标题的处理函数
    function toggleMenu(index) {
        console.log('toggleMenu', index)
        // 切换当前菜单的激活状态
        const isActive = menuContents[index].getAttribute('data-state')

        // 关闭所有菜单
        menuContents.forEach((content) =>
            content.setAttribute('data-state', 'closed')
        )
        menuHeaders.forEach((header) =>
            header.setAttribute('data-state', 'closed')
        )

        // 如果当前菜单原本不是激活状态，则激活它
        if (isActive === 'closed') {
            console.log('menuContents[index]', menuContents[index])
            menuContents[index].setAttribute('data-state', 'open')
            menuHeaders[index].setAttribute('data-state', 'open')
        }
    }

    // 为每个菜单标题添加点击事件
    console.log('menuHeaders', menuHeaders)
    menuHeaders.forEach((header, index) => {
        header.addEventListener('click', function (e) {
            e.stopPropagation() // 阻止事件冒泡
            toggleMenu(index)
        })
    })

    // 点击页面其他区域时关闭所有菜单
    document.addEventListener('click', function () {
        menuContents.forEach((content) =>
            content.setAttribute('data-state', 'closed')
        )
        menuHeaders.forEach((header) =>
            header.setAttribute('data-state', 'closed')
        )
    })
}

document.addEventListener('DOMContentLoaded', () => {
    waitForElement('.NavigationMenu_menu__05DPv', menuInit)
})
