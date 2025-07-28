async function fetchPortData() {
    const url = 'https://raw.githubusercontent.com/wesley-guilherme/wesleyguilherme.github.io/refs/heads/main/assets/js/main.json';
    const fetching = await fetch(url);
    return await fetching.json();   
}
 