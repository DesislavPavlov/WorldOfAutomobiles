const brands = [
    { 
        name: "BMW", 
        logo: "../media/brands/brand_bmw.webp", 
        models: [
            { name: "E90 3-Series", img: "../media/models/bmw_e90.webp" },
            { name: "X5", img: "../media/models/bmw_x5.webp" },
            { name: "M3", img: "../media/models/bmw_m3.webp" }
        ], 
        width: 150, 
        height: 150 
    },
    { 
        name: "Mercedes", 
        logo: "../media/brands/brand_mercedes.webp", 
        models: [
            { name: "C-Class", img: "../media/models/mercedes_cclass.webp" },
            { name: "G-Class", img: "../media/models/mercedes_gclass.webp" },
            { name: "S-Class", img: "../media/models/mercedes_sclass.webp" }
        ], 
        width: 130, 
        height: 130 
    },
    { 
        name: "Audi", 
        logo: "../media/brands/brand_audi.webp", 
        models: [
            { name: "A4", img: "../media/models/audi_a4.webp" },
            { name: "Q5", img: "../media/models/audi_q5.webp" },
            { name: "R8", img: "../media/models/audi_r8.webp" }
        ], 
        width: 150, 
        height: 115 
    },
    { 
        name: "Volkswagen", 
        logo: "../media/brands/brand_vw.webp", 
        models: [
            { name: "Golf", img: "../media/models/volkswagen_golf.webp" },
            { name: "Passat", img: "../media/models/volkswagen_passat.webp" },
            { name: "Polo", img: "../media/models/volkswagen_polo.webp" }
        ], 
        width: 140, 
        height: 140 
    },
    { 
        name: "Honda", 
        logo: "../media/brands/brand_honda.webp", 
        models: [
            { name: "Civic", img: "../media/models/honda_civic.webp" },
            { name: "Accord", img: "../media/models/honda_accord.webp" },
            { name: "CR-V", img: "../media/models/honda_crv.webp" }
        ], 
        width: 125, 
        height: 125 
    },
    { 
        name: "Skoda", 
        logo: "../media/brands/brand_skoda.webp", 
        models: [
            { name: "Fabia", img: "../media/models/skoda_fabia.webp" },
            { name: "Octavia", img: "../media/models/skoda_octavia.webp" },
            { name: "Kodiaq", img: "../media/models/skoda_kodiaq.webp" }
        ], 
        width: 150, 
        height: 125 
    },
    { 
        name: "Renault", 
        logo: "../media/brands/brand_renault.webp", 
        models: [
            { name: "Clio", img: "../media/models/renault_clio.webp" },
            { name: "Duster", img: "../media/models/renault_duster.webp" },
            { name: "Megane", img: "../media/models/renault_megane.webp" }
        ], 
        width: 150, 
        height: 150 
    },
    { 
        name: "Opel", 
        logo: "../media/brands/brand_opel.webp", 
        models: [
            { name: "Corsa", img: "../media/models/opel_corsa.webp" },
            { name: "Astra", img: "../media/models/opel_astra.webp" },
            { name: "Insignia", img: "../media/models/opel_insignia.webp" }
        ], 
        width: 150, 
        height: 125 
    }
];
const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const brandName = document.getElementById("brand-name");
const brandLogo = document.getElementById("brand-logo");
const carModels = document.getElementById("car-models");
const closeBtn = document.getElementById("close");

brands.forEach((brand, index) => {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.innerHTML = `<img src="${brand.logo}" alt="${brand.name} Logo" width="${brand.width}px" height="${brand.height}px">`;
    div.addEventListener("click", () => openModal(index));
    grid.appendChild(div);
});

function openModal(index) {
    const brand = brands[index];
    brandName.textContent = brand.name;
    brandLogo.src = brand.logo;
    brandLogo.alt = brand.name + " Logo";
    carModels.innerHTML = brand.models.map(model => `
        <div>
            <img src="${model.img}" alt="${model.name}">
            <p>${model.name}</p>
        </div>
    `).join("");
    modal.style.animation = "fadeIn 0.3s ease-out";
    modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
    modal.style.animation = "fadeOut 0.3s ease-out";
    setTimeout(() => {
        modal.style.display = "none";
    }, 290);
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.animation = "fadeOut 0.3s ease-out";
        setTimeout(() => {
            modal.style.display = "none";
        }, 250);
    }
});