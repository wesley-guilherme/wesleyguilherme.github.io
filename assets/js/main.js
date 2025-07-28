function updatePortInfo(portData) {
    const title = document.getElementById('port.title')
    title.innerText = portData.title
}

(async() => {
    const portData = await fetchPortData()
    updatePortInfo(portData)
})