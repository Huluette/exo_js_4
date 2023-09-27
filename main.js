function getOption() {
    selectElement = document.querySelector('#selec1');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}