const showHideSidebar = () => {
    let $headerBrand = document.querySelector(".header .header-brand");
    let $gridContainer = document.querySelector("#grid-container");
    $gridContainer.classList.toggle("hide-sidebar");
    $headerBrand.classList.toggle("hide");
}

const setEvents = ()=>{
    /*Sidebar submenu events*/
    Array.from(document.querySelectorAll("[data-activate='collapse']")).forEach($toggleBtn => {
        $toggleBtn.addEventListener("click", event=>{
            let $collapsible = document.querySelector(`[data-collapse='#${event.currentTarget.id}']`);
            $collapsible.classList.toggle("show");
            let $icon = $toggleBtn.querySelector(".fas");
            $icon.classList.toggle("fa-angle-down");
            $icon.classList.toggle("fa-angle-up");
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
    // if(isMobile.any){
    //     showHideSidebar();
    // }
})();