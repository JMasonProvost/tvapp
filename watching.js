const container = document.querySelector('#container');
const baseURL = 'https://soldierswifecrazylife.com/wp-content/uploads/2023/01/'


for (let i = 1; i < 10; i++) {
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.jpg`
    container.appendChild(newImg)
}
