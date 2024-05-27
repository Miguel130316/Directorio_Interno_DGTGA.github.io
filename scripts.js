const data = [
    { id: 1, fullName: 'Grethel Alejandra Pilgram Santos', puesto:'Directora General de Transparencia y Gobierno Abierto', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'grethel.pilgram@funcionpublica.gob.mx', extension: '1052' },
    { id: 2, fullName: 'Andrik Gilberto García Sánchez', puesto:'Subdirector de Gobierno Abierto', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'andrik.garcia@funcionpublica.gob.mx', extension: '1418' },
    
    { id: 3, fullName: 'Luis Antonio Guillén Quintero', puesto:'Director de Transparencia en la Gestión Pública', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'luis.guillen@funcionpublica.gob.mx', extension: '1228' },
    { id: 4, fullName: 'Alejandra Salas Reyes ', puesto:'Subdirectora de Datos Personales', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'alejandra.salas@funcionpublica.gob.mx', extension: '1581' },
    { id: 5, fullName: 'Juan Antonio Guzmán Oliva', puesto:'Jefe de Departamento de Gestión a Solicitudes de Información', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'juan.guzman@funcionpublica.gob.mx', extension: '1376' },
    { id: 6, fullName: 'Brenda Grisselle Zatarain Ramírez', puesto:'Jefa de Departamento de Datos Personales', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'brenda.zatarain@funcionpublica.gob.mx', extension: '1192' },
    
    { id: 7, fullName: 'Fermín Hildebrando García Leal ', puesto:'Director de Apertura Gubernamental Y Atención Ciudadana', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'fermin.garcia@funcionpublica.gob.mx', extension: '1174' },
    { id: 8, fullName: 'Julio Cesar Martinez Sanabria', puesto:'Subdirector de Transparencia en la Gestión Pública', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'julio.martinez@funcionpublica.gob.mx ', extension: '1575' },
    { id: 9, fullName: 'Lethzae Guadalupe Rojas Anievas', puesto:'Subdirectora de Implementación del Sistema Nacional Anticorrupción', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'lethzae.rojas@funcionpublica.gob.mx ', extension: '1441' },
    { id: 10, fullName: 'Andrea Michelle Delgado Rodríguez', puesto:'Jefa de Departamento de Gestión de  Solicitudes de Acceso a la Información', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'andrea.delgado@funcionpublica.gob.mx', extension: '1384' },
    { id: 11, fullName: 'Lizbeth Julieta Salinas Ruíz', puesto:'Auxiliar de Gestión de Solicitudes de Acceso a la información', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'lizbeth.salinas@funcionpublica.gob.mx', extension: '1149' },
    { id: 12, fullName: 'Enrique Zapotitla Salazar' , puesto:'Enlace de Transparencia en la Gestión Pública', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto',  email: 'enrique.zapotitla@funcionpublica.gob.mx', extension: '1537' },
    { id: 13, fullName: 'Federico René Sánchez Delgado', puesto:'Auxiliar de Datos Personales', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'federico.sanchez@funcionpublica.gob.mx', extension: '1543' },
    
    { id: 14, fullName: 'Eduardo Vargas Ortiz', puesto:'Director de Gobierno Abierto y Obligaciones de Transparencia', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'evargas@funcionpublica.gob.mx', number: '123-456-7890', extension: '1023' },
    { id: 15, fullName: 'Andrea Mondragón Reyes ', puesto:'Subdirectora de Gestión de Solicitudes de Acceso a la Información  ', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'andrea.mondragon@funcionpublica.gob.mx', extension: '1523' },
    { id: 16, fullName: 'Erika Torres Godínez', puesto:'Subdirector de Consultoría de Gobierno Abierto', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'erika.torres@funcionpublica.gom.mx', extension: '1385' },
    { id: 17, fullName: 'Raúl Galicia Lira', puesto:'Subdirector de Seguimiento Políticas Anticorrupción', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'raul.galicia@funcionpublica.gob.mx ', extension: '1404' },
    { id: 18, fullName: 'Javier Ortiz Hernández ', puesto:'Auxiliar de Datos Abiertos', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'jortizh@funcionpublica.gob.mx', extension: '1382' },
    
    { id: 19, fullName: 'Arturo Jaime Magallanes', puesto:'Director de Datos Abiertos', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'arturo.jaime@funcionpublica.gob.mx', extension: '1080' },
    { id: 20, fullName: 'Cristina Iliana Begne Guerra', puesto:'Subdirectora de Evaluación de Políticas Anticorrupción', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'cristina.begne@funcionpublica.gob.mx', extension: '1451' },
    { id: 21, fullName: 'Miguel Angel Villegas Arellanos', puesto:'Jefe de Departamento de Datos Abiertos', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'miguel.villegas@funcionpublica.gob.mx', extension: '1139' },
    
    { id: 22, fullName: 'Irving Manchinelly Mota', puesto:'Director de Protección de Datos Personales', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'irving.manchinelly@funcionpublica.gob.mx', extension: '1433' },
    { id: 23, fullName: 'Karina Pérez Cortés', puesto:'Subdirectora de Gestión de Solicitudes de Acceso a la Información', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'karina.perez@funcionpublica.gob.mx', extension: '1276' },
    { id: 24, fullName: 'Fernando Escandón Yuso', puesto:'Subdirector de Implementación del Sistema Nacional de Fiscalización', area: 'Unidad de Políticas Anticorrupción - Dirección General de Transparencia y Gobierno Abierto', email: 'fernando.escandon@funcionpublica.gob.mx', extension: '1553' },


    // Add more sample data here
];

let currentPage = 1;
const rowsPerPage = 11;
const searchBox = document.getElementById('searchBox');
const resultCount = document.getElementById('resultCount');
const directoryTable = document.getElementById('directoryTable').querySelector('tbody');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');

function displayTable(page, data) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    directoryTable.innerHTML = '';
    paginatedData.forEach(item => {
        const row = `<tr>
            <td>${item.id}</td>
            <td>${item.fullName}</td>
            <td>${item.puesto}</td>
            <td>${item.area}</td>
            <td>${item.email}</td>
            <td>${item.extension}</td>
        </tr>`;
        directoryTable.innerHTML += row;
    });

    resultCount.textContent = `${data.length} Resultados Encontrados `;
    pageInfo.textContent = `Pagina ${currentPage}`;
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = end >= data.length;
}

function searchDirectory() {
    const query = searchBox.value.toLowerCase();
    const filteredData = data.filter(item => 
        item.fullName.toLowerCase().includes(query) ||
        item.puesto.toLowerCase().includes(query) ||
        item.area.toLowerCase().includes(query) ||
        item.id.toString().includes(query)
    );
    displayTable(currentPage, filteredData);
}

searchBox.addEventListener('input', searchDirectory);

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        searchDirectory();
    }
});

nextPageButton.addEventListener('click', () => {
    if ((currentPage * rowsPerPage) < data.length) {
        currentPage++;
        searchDirectory();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    displayTable(currentPage, data);
});


document.getElementById('downloadDirectory').addEventListener('click', downloadCSV);

        function downloadCSV() {
            const rows = [["ID", "Nombre Completo", "Puesto", "Área", "Correo", "Extensión"]];
            data.forEach(item => {
                rows.push([item.id, item.fullName, item.puesto, item.area, item.email, item.extension]);
            });

            let csvContent = "data:text/csv;charset=utf-8," 
                + rows.map(e => e.join(",")).join("\n");

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "directory.csv");
            document.body.appendChild(link);

            link.click();
            document.body.removeChild(link);
        }
