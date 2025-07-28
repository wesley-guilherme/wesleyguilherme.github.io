async function fetchPortData() {
    const url = 'https://github.com/wesley-guilherme/wesleyguilherme.github.io/blob/main/data/port.json';
    const response = await fetch(url);
    return await response.json();   
}
 