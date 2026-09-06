export async function getQuestions() {
  const response = await fetch('/data/questions-data.json');
  if (!response.ok) throw new Error(`Failed to fetch questions: ${response.status}`);

  try {
    return await response.json();
  }
  catch (error) {
    throw new Error('Malformed JSON', { cause: error });
  }
}
