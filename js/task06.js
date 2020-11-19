const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', function () {
  const inputLength = Number(inputRef.value.length);
  const correctLength = Number(inputRef.dataset.length);
  if (inputLength === correctLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
});

// let input = document.querySelector('input')

// input.addEventListener('blur', function() {
//   let size = this.getAttribute('data-size');
//   let len = this.value.length
//   let currentClass = (len = size) ? 'valid' : 'invalid'
//   toggleClass(this, currentClass )
// })
// function toggleClass(elem, currentClass) {
//   elem.className = ''
//   elem.classList.add(currentClass)
// }
