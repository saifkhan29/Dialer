const input = document.getElementById('input');
const values = document.querySelectorAll('.btn h2');
const delete2 = document.getElementById('delete')


values.forEach(value => {
    value.addEventListener('click',(e) => {
        let target = e.target.innerText
        input.value += target
        
    })
})

delete2.addEventListener('click', () => {
    input.value = input.value.slice(0, -1)
})




