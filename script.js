const jobPortals = [
    { name: "Laborum", url: "https://www.laborum.cl/" },
    { name: "Computrabajo", url: "https://www.computrabajo.cl/" },
    { name: "Indeed Chile", url: "https://www.indeed.cl/" },
    { name: "Trabajando.com", url: "https://www.trabajando.cl/" },
    { name: "Empleos Públicos", url: "https://www.empleospublicos.cl/" },
    { name: "Bumeran", url: "https://www.bumeran.cl/" },
];

const jobPositions = [
    "Abogado",
    "Asesor jurídico",
    "Notario",
    "Procurador",
    "Juez",
    "Profesor de derecho",
    "Consultor en leyes",
];

const publicInstitutions = [
    "Municipalidades de la región de Valparaíso",
    "Gobernaciones Provinciales",
    "Servicios públicos regionales",
    "Poder Judicial (Tribunales de Justicia y Juzgados)",
    "Defensoría Penal Pública",
    "Ministerio Público (Fiscalía)",
    "Oficinas de Registro Civil e Identificación",
    "Direcciones regionales de organismos gubernamentales",
];


function createListItems(list, id) {
const listElement = document.getElementById(id);

list.forEach((item) => {
    const listItem = document.createElement("li");

    if (typeof item === "string") {
        listItem.textContent = item;
    } else {
        const link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.name;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        listItem.appendChild(link);
    }

    listElement.appendChild(listItem);
});
}

document.addEventListener("DOMContentLoaded", () => {
createListItems(jobPortals, "job-portals");
createListItems(jobPositions, "job-positions");
createListItems(publicInstitutions, "public-institutions");
});

