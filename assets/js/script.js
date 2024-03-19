const dropBg = document.querySelector(".dropdownBackground");
const links = document.querySelectorAll(".link");
const dropdowns = document.querySelectorAll(".dropdown");

function showDrop() {
    this.classList.add("prepare");
    setTimeout(() => {
        this.classList.contains("prepare") && this.classList.add("open");
    }, 100);

    dropBg.classList.add("open");

    const dropdown = this.querySelector(".dropdown");
    const dropdownCoords = dropdown.getBoundingClientRect();
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - linkCoords.top,
        left: dropdownCoords.left
    };

    dropBg.style.setProperty('width', `${coords.width}px`);
    dropBg.style.setProperty('height', `${coords.height}px`);
    dropBg.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function hideDrop(e) {
    this.classList.remove("open", "prepare");
    dropBg.classList.remove("open");
}

links.forEach(link => link.addEventListener('mouseenter', showDrop));
links.forEach(link => link.addEventListener('mouseout', hideDrop));