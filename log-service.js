export async function getLogs() {
  const response = await fetch('./log-data.json');
  if (response.ok) {
    return response.json();
  }
}
