export async function getJsonData() {
    return await fetch('./live-data.json')
        .then(response => response.json())
        .then(data => JSON.stringify(data))
        .catch(error => {
            console.error('Error fetching JSON data:', error);
            return '[]';
        });
}
