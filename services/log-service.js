export async function getLogs() {
  const response = await fetch('/data/log-data.json');
  if (!response.ok) throw new Error(`Failed to fetch logs: status ${response.status}`);

  try {
    return await response.json();
  }
  catch (error) {
    throw new Error('Malformed JSON', {cause : error})
  }
}
