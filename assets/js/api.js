async function fetchPortData() {
    const url = 'https://github.com/wesley-guilherme/wesleyguilherme.github.io/blob/main/data/port.json';
    const fetching = await fetch(url);
    return await fetching.json();   
}
 