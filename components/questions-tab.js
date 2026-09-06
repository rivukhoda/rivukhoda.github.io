export function QuestionsTab(questions) {
  const template = document.createElement('template');
  template.innerHTML = `${questions.map(({ question, answer }) => `
    <details>
      <summary>${question}</summary>
      <p>${answer}</p>
    </details>`
  ).join('')}`;

  return template.content.cloneNode('true');
}
