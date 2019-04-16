const showHideSidebar = () => {
    let $sidebar = document.querySelector("#sidebar");
    let $sidebarToggle = document.querySelector("[data-activate='sidebar-toggle']");
    let $gridContainer = document.querySelector("#grid-container");
    $sidebar.classList.toggle("hide");
    $sidebarToggle.classList.toggle("hide");
    $gridContainer.classList.toggle("hide");
}

const setEvents = ()=>{
    /*Sidebar submenu events*/
    let $sidebarItemParents = document.querySelectorAll("[data-activate='sidebar-submenu']");
    Array.from($sidebarItemParents).forEach($sidebarItemParent => {
        $sidebarItemParent.addEventListener("click", event=>{
            let $subitem = document.querySelector(`[data-parent='#${event.currentTarget.id}']`);
            $subitem.classList.toggle("hide");
            $subitem.classList.toggle("show");
        });
    });
    /*Sidebar toggle event*/
    document.querySelector("[data-activate='sidebar-toggle']").addEventListener("click", ()=>{
        showHideSidebar();
    });
    /* Flag click event */
    Array.from(document.querySelectorAll("[data-parent='#language'] > .sidebar-subitem"))
    .forEach($selectedSubitem => {
        $selectedSubitem.addEventListener("click", ()=>{
            let $itemParent = document.querySelector("#language");
            $itemParent.querySelector("img").src = $selectedSubitem.querySelector("img").src;
            $itemParent.querySelector("a").textContent = $selectedSubitem.querySelector("a").textContent;
        });
    });
}

(()=>{
    setEvents();
    if(isMobile.any){
        showHideSidebar();
    }
})();