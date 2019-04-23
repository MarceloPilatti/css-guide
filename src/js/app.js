const collapse = $toggleBtn=>{
    let $collapsible = document.querySelector(`[data-collapse='#${$toggleBtn.id}']`);
    $collapsible.classList.toggle("show");
    let $icon = $toggleBtn.querySelector(".fas");
    if($icon){
        $icon.classList.toggle("fa-angle-down");
        $icon.classList.toggle("fa-angle-up");
    }
}
const setEvents = ()=>{
    /* Collapse events */
    Array.from(document.querySelectorAll("[data-activate='collapse']")).forEach($toggleBtn => {
        $toggleBtn.addEventListener("click", () => collapse($toggleBtn));
        $toggleBtn.addEventListener('blur', () => collapse($toggleBtn));
    });

    /* Sidebar toggle event */
    document.querySelector("[data-activate='sidebar-toggle']").addEventListener("click", ()=>{
        let $headerBrand = document.querySelector(".header .header-brand");
        let $gridContainer = document.querySelector("#grid-container");
        $gridContainer.classList.toggle("hide-sidebar");
        $headerBrand.classList.toggle("hide");
    });

    /* Language click event */
    Array.from(document.querySelectorAll("[data-collapse='#language'] > .sidebar-subitem"))
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
})();