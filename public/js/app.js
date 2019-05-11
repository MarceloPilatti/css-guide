const collapse = ($toggleBtn, close) => {
    let $collapsible = document.querySelector(`[data-collapse='#${$toggleBtn.id}']`);
    if(close) {
        $collapsible.classList.remove("show");
    } else {
        $collapsible.classList.toggle("show");
    }
    let $icon = $toggleBtn.querySelector(":scope > .fas");
    if($icon) {
        $icon.classList.toggle("fa-angle-down");
        $icon.classList.toggle("fa-angle-up");
    }
}
const setEvents = () => {
    /* Collapse events */
    Array.from(document.querySelectorAll("[data-activate='collapse']")).forEach($toggleBtn => {
        $toggleBtn.addEventListener("click", () => collapse($toggleBtn));
        $toggleBtn.addEventListener('blur', () => collapse($toggleBtn, close));
    });

    /* Sidebar toggle event */
    document.querySelector("[data-activate='sidebar-toggle']").addEventListener("click", () => {
        let $gridContainer = document.querySelector(".grid-container");
        let $sidebar = document.querySelector(".sidebar");
        let $headerBrand = document.querySelector(".header-brand");
        let hasHideSidebar = $gridContainer.classList.contains("hide-sidebar");
        let sidebarWidth = $sidebar.offsetWidth;
        
        if(hasHideSidebar || sidebarWidth == 0) {
            $sidebar.style.width = "100%";
            $gridContainer.classList.remove("hide-sidebar");
            $headerBrand.classList.add("hide");
            return;
        }
        $sidebar.style.width = "0";
        $gridContainer.classList.add("hide-sidebar");
        $headerBrand.classList.remove("hide");
    });

    /* Language click event */
    Array.from(document.querySelectorAll("[data-collapse='#language'] .sidebar-item"))
    .forEach($selectedSubitem => {
        $selectedSubitem.addEventListener("click", () => {
            let $itemParent = document.querySelector("#language");
            $itemParent.querySelector("img").src = $selectedSubitem.querySelector("img").src;
            $itemParent.querySelector("a").textContent = $selectedSubitem.querySelector("a").textContent;
        });
    });

    // Make elements draggable
    interact('.draggable')
    .draggable({
        inertia: true,
        allowFrom: ".draggable div:nth-child(1):not(.card)",
        autoScroll: true,
        modifiers: [
            interact.modifiers.restrict({
                restriction: "parent",
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            }),
        ],
        autoScroll: true,
        onmove: event => {
            let target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            target.style.webkitTransform =target.style.transform ='translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        },
        onend: ()=>{}
    })
    .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        inertia: true,
        modifiers: [
          interact.modifiers.restrictEdges({
            outer: 'parent',
            endOnly: true,
          }),
    
          interact.modifiers.restrictSize({
            min: { width: 100, height: 100 },
          }),
        ],
        onmove: event => {
            let target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0),
                y = (parseFloat(target.getAttribute('data-y')) || 0);
        
            target.style.width  = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';
        
            x += event.deltaRect.left;
            y += event.deltaRect.top;
        
            target.style.webkitTransform = target.style.transform ='translate(' + x + 'px,' + y + 'px)';
        
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }
    });
    flatpickr(".date-range", {
        mode: "range",
        minDate: "today",
        dateFormat: "Y-m-d"
    });
    Array.prototype.forEach.call(document.querySelectorAll('.scrollbar .collapse'), el => new SimpleBar(el,{scrollbarMinSize: 5}));
}

(()=>{
    setEvents();
})();