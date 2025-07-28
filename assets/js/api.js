async function fetchPortData() {
    const url = 'https://raw.githubusercontent.com/wesley-guilherme/wesleyguilherme.github.io/refs/heads/main/data/port.json';
    const response = await fetch(url);
    return await response.json();   
}
 