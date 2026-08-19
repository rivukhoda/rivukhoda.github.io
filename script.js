import { getJsonData } from './live-service.js';
import { getLogs } from './log-service.js';
import { jsonToTable } from './utils.js';

document
  .addEventListener('DOMContentLoaded', renderLiveTabContent);

document
  .querySelector('a[href="#live"]')
  .addEventListener('click', renderLiveTabContent);

async function renderLiveTabContent() {
  const jsonData = await getJsonData();
  const tableHTML = jsonToTable(jsonData);
  document.querySelector('.content').innerHTML = tableHTML;
}

document
  .querySelector('a[href="#log"]')
  .addEventListener('click', renderLogTabContent);

async function renderLogTabContent() {
  const log = await Log();
  document.querySelector('.content').replaceChildren(log);
}

async function Log() {
  const logs = await getLogs();

  const template = document.createElement('template');
  template.innerHTML = `
      ${logs.map(log => `
          <div class="log-items">
          <details>
              <summary>${log}</summary>
          </details>
          </div>`
      ).join('')}
  `;

    return template.content.cloneNode(true);
}
