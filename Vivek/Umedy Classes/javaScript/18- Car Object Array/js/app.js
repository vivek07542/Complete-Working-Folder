let btnGet = document.querySelector("button");
let myTable = document.querySelector("#tableBox");
let table = document.getElementById("tblData");
let cars = [
    { name: "Rapid", model: 2014, company: "Skoda", capacity: 5, color: "red" },
    { name: "XUV 500", model: 2019, company: "Mahindra", capacity: 7, color: "white" },
    { name: "Hectar", model: 2020, company: "MG", capacity: 5, color: "blue" },
    { name: "Alto", model: 2010, company: "Maruti", capacity: 3, color: "grey" },
    { name: "Santro", model: 2019, company: "Hyundai", capacity: 4, color: "skyblue" },
    { name: "Mustang", model: 2018, company: "Ford", capacity: 2, color: "yellow" },
    { name: "Ciaz", model: 2019, company: "Maruti", capacity: 4, color: "white" },
    { name: "City", model: 2018, company: "Honda", capacity: 4, color: "red" },
    { name: "WagnoR", model: 2017, company: "Maruti", capacity: 3, color: "blue" },
    { name: "TATA 420", model: 2015, company: "TATA", capacity: 2, color: "grey" },
    { name: "Winger", model: 2018, company: "TATA", capacity: 13, color: "yellow" },
    { name: "EcoSport", model: 2020, company: "Ford", capacity: 4, color: "skyblue" }
];
let color = [
    { colorName: "red", colorCode: "rgb(204,0,0)", isSelected: "false" },
    { colorName: "white", colorCode: "rgb(255,255,255)", isSelected: "false" },
    { colorName: "blue", colorCode: "rgb(0,126,255)", isSelected: "false" },
    { colorName: "grey", colorCode: "rgb(204,204,204)", isSelected: "false" },
    { colorName: "skyblue", colorCode: "rgb(85,172,238)", isSelected: "false" },
    { colorName: "yellow", colorCode: "rgb(255,221,0)", isSelected: "false" },
];
let headers = ["Name", "Model", "Company", "Capacity", "Color"];
btnGet.addEventListener("click", function () {
    let tableHead = document.createElement("thead");

    let headerRow = document.createElement("tr");
    // headerRow.setAttribute("scope","row")
    headers.forEach(headerText => {
        let header = document.createElement("th");
        header.setAttribute("scope", "col")
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
        tableHead.appendChild(headerRow);
    });
    table.appendChild(tableHead);
    let tableBody = document.createElement("tbody");
    cars.forEach(car => {
        col = car.color;
        let row = document.createElement("tr");
        row.setAttribute("scope", "row")
        Object.values(car).forEach(text => {
            let cell = document.createElement("td");
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            tableBody.appendChild(row);
        })
        table.appendChild(tableBody);
    })
    for (var i = 0; i < cars.length; i++) {
        doc = document.getElementsByTagName('tbody');
        let che = doc[0].children[i].children[4];
        for (var j = 0; j < color.length; j++) {
            if (color[j].colorName === che.innerHTML) {
                che.style.backgroundColor = color[j].colorCode;
            }
        }
    }
    myTable.appendChild(table);
});
