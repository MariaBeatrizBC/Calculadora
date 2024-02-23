function insert(num){
    var res = document.getElementById('res').innerText;
    var numero = document.getElementById('res').innerText;
    document.getElementById('res').innerText = numero + num;
}
function limpar(){
    var res = document.getElementById('res').innerText = '';
}
function voltar(){
    var res = document.getElementById('res').innerText;
    document.getElementById('res').innerText = res.substring(0, res.length -1)
}
function calcular(){
    var res = document.getElementById('res').innerText;
    if(res){
        document.getElementById('res').innerText = eval(res)
    } else {
        document.getElementById('res').innerText = 'Nada para calcular'
    }
} 