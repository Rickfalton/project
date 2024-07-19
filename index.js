let contributions = []

document.addEventListener('DOMContentLoaded', () => {
    renderList()
    renderTotal()
})

const handleContribution = () => {
    const nameInput = document.getElementById('name')
    const amountInput = document.getElementById('amount')

    if (!amountInput.value || !nameInput.value) {
        alert('enter name and amount')
        return
    }

    contributions.push({ name: nameInput.value, amount: amountInput.value })

    //    console.log({contributions})
    renderList()
    renderTotal()

    nameInput.value = ''
    amountInput.value = ''
}

// if
const renderList = () => {
    const cList = document.querySelector("#list");
    cList.innerHTML = ''
    contributions.forEach((contribution, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index +1}. Name: ${contribution.name}, Amount: ${contribution.amount}`;
        cList.appendChild(listItem);
    })
}

const renderTotal = () => {
    const total = contributions.reduce((acc, curr) => acc + Number(curr.amount), 0)
    document.getElementById('total').innerHTML = `KES: ${total}`
}