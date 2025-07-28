function updatePortInfo(portData) {
    const title = document.getElementById('port-title')
    title.innerText = portData.title
}

function updatePortName(portData) {
    const name = document.getElementById('port-name')
    name.innerText = portData.name
}

(async() => {
    const portData = await fetchPortData()
    updatePortInfo(portData)
    updatePortName(portData)
})();