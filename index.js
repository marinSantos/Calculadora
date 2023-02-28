const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const themeSwitcher = document.getElementById('themeSwitcher')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const root = document.querySelector(':root')
const copyToClipboard = document.getElementById('copyToClipboard')
const main = document.querySelector('main')


function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove("error")

}

document.addEventListener('keydown', function (ev) {
  ev.preventDefault()

  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === 'Enter') {
    calculate()

  }


})
/

document.querySelectorAll('.charKey').forEach(function (item) {
  item.addEventListener('click', function () {
    copyToClipboard.innerText = 'Copy'
    copyToClipboard.classList.remove('success')
    let value = item.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click', function () {
  input.value = ''
  copyToClipboard.innerText = 'Copy'
  copyToClipboard.classList.remove('success')
})
document.getElementById('equal').addEventListener('click', function () {
  calculate()
  copyToClipboard.innerText = 'Copy'
  copyToClipboard.classList.remove('success')
})

copyToClipboard.addEventListener('click', function () {
  navigator.clipboard.writeText(resultInput.value)

  copyToClipboard.innerText = 'Sucess!'
  copyToClipboard.classList.add('success')

  setTimeout(() => {
    copyToClipboard.innerText = 'Copy'
    copyToClipboard.classList.remove('success')
  }, 2000)


})






