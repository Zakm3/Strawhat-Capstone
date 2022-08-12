const strawhatContainer = document.querySelector('#strawhat-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:5501/api/strawhats`


const strawhatCallback = ({ data: strawhats }) => displayStrawhats(strawhats)
const errCallback = err => console.log(err)


const getAllStrawhats = () => axios.get(baseURL).then(strawhatCallback).catch(errCallback)
const createStrawhat = body => axios.post(baseURL, body).then(strawhatCallback).catch(errCallback)
const deleteStrawhat = id => axios.delete(`${baseURL}/${id}`).then(strawhatCallback).catch(errCallback)
const updateBounty = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(strawhatCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let bio = document.querySelector('#bio')
    let bounty = document.querySelector('#bounty')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        bio: bio.value,
        bounty: bounty.value, 
        imageURL: imageURL.value
    }

    createStrawhat(bodyObj)

    name.value = ''
    bio.value = ''
    bounty.value = ''
    imageURL.value = ''
}
function createStrawhatCard(strawhats) {
    const strawhatCard = document.createElement('div')
    strawhatCard.classList.add('strawhat-card')

    strawhatCard.innerHTML = `<img alt='strawhat cover image' src=${strawhats.imageURL} class="strawhat-cover-image"/>
    <br/>
    <p class="name">${strawhats.name}</p>     <br/>
    <p1 class="strawhat-bio">${strawhats.bio}</p1> 
    <br/>

    <div class="btns-container">
        <button onclick="updateBounty(${strawhats.id}, 'minus')">-</button>
        <br>
        <p1 class="strawhat-bounty">B$${strawhats.bounty}</p1>
        <button onclick="updateBounty(${strawhats.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteStrawhat(${strawhats.id})">delete</button>
    <br/>

    `


    strawhatContainer.appendChild(strawhatCard)
}


function displayStrawhats(arr) {
    strawhatContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createStrawhatCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllStrawhats()