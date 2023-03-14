function calcular(){
    let text = document.getElementById('texto').value;

    let result = text.split(' ').length;

    document.getElementById('resultado').innerHTML = 'O texto possui: ' + result + ' palavras';
}