import { getLiveEvents } from "/services/live-service.js";

export async function LiveTab() {
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

  return template.content.cloneNode(true);
}
