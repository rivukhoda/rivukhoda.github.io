export async function getLiveEvents() {
  const response = await fetch('/data/live-data.json');
  if (!response.ok) throw new Error(`${response.status}: Failed to fetch live events`);

  try {
    return await response.json()
  }
  catch (error) {
    throw new Error('Malformed JSON', { cause : error });
  }
}
