import { LiveTab } from '/components/live-tab.js';
import { LogTab } from '/components/log-tab.js';
import { QuestionsTab } from '/components/questions-tab.js';
import { getQuestions } from '/services/questions-service.js';

// LIVE TAB
document
  .addEventListener('DOMContentLoaded', renderLiveTabContent);

document
  .querySelector('a[href="#live"]')
  .addEventListener('click', renderLiveTabContent);

async function renderLiveTabContent() {
  const liveTab = await LiveTab();
  document.querySelector('.content').replaceChildren(liveTab);
}

// LOG TAB
document
  .querySelector('a[href="#log"]')
  .addEventListener('click', renderLogTabContent);

async function renderLogTabContent() {
  const logTab = await LogTab();
  document.querySelector('.content').replaceChildren(logTab);
}

// QUESTIONS TAB
document
  .querySelector('a[href="#Q&A"]')
  .addEventListener('click', renderQuestionsTab);

async function renderQuestionsTab() {
  const questions = await getQuestions();
  const questionsTab = QuestionsTab(questions);
  document.querySelector('.content').replaceChildren(questionsTab);
}
