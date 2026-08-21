import { getLogs } from '/services/log-service.js';

export async function LogTab() {
  const logs = await getLogs();

  const template = document.createElement('template');
  template.innerHTML = `
      ${logs.map(log => `
          <div class="log-items">
            <details>
                <summary>${log.date}</summary>
                <p>${log.note}</p>
            </details>
          </div>`
      ).join('')}
  `;

    return template.content.cloneNode(true);
}
