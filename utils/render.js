export function jsonToTable(data) {
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


{
  const liveEvents = await getLiveEvents();

  const template = document.createElement('template');
  template.innerHTML = liveEvents.map(event => {
    `<table>
        <thead>
          <tr>
            <th>date</th>
            <th>venue</th>
            <th>city</th>
            <th>track</th>
          </tr>
        </thead>
        <tbody>
          ${liveEvents.map(event => {
            `<tr>
              <td>${event.date}</td>
              <td>${event.venue}</td>
              <td>${event.city}</td>
              <td>${event.track}</td>
            </tr>`
          }).join('')}
        </tbody>
      </table>`
  });
}
