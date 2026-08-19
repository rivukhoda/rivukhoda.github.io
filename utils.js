export function jsonToTable(jsonData) {
    const data = JSON.parse(jsonData);
    let table = '<table>';

    // Create table header
    table += '<tr>';
    for (const key in data[0]) {
        table += `<th>${key}</th>`;
    }
    table += '</tr>';

    // Create table rows
    data.forEach(item => {
        table += '<tr>';
        for (const key in item) {
            table += `<td>${item[key]}</td>`;
        }
        table += '</tr>';
    });

    table += '</table>';
    return table;
}
