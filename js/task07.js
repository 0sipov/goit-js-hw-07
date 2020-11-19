const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

inputRef.addEventListener('input', function () {
  spanRef.style.fontSize = `${+inputRef.value + 50}%`;
});
