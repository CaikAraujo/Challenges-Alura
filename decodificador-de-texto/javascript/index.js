var textoInput = document.querySelector("#texto-input");
var outInput = document.querySelector("#output")

function criptografar(){
    var texto = textoInput.value;
    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");


   if(resultadoCripto){
     document.getElementById('output').innerHTML = resultadoCripto;
     document.getElementById('imagem').style.display = 'none';
     document.getElementById('msg-notFound').style.display = 'none';
     document.getElementById('digite-texto').style.display = 'none';
     document.getElementById('btn-copy').style.display = 'block';
   }else{
    document.getElementById('imagem').style.display = 'block';
    document.getElementById('msg-notFound').style.display = 'block';
    document.getElementById('digite-texto').style.display = 'block';
    document.getElementById('btn-copy').style.display = 'none';
    document.getElementById('output').innerHTML = '';
   }
    
}

function descriptografar(){
    var texto = textoInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    if(resultDescripto){
        document.getElementById('output').innerHTML = resultDescripto;
        document.getElementById('imagem').style.display = 'none';
        document.getElementById('msg-notFound').style.display = 'none';
        document.getElementById('digite-texto').style.display = 'none';
        document.getElementById('btn-copy').style.display = 'block';
      }else{
       document.getElementById('imagem').style.display = 'block';
       document.getElementById('msg-notFound').style.display = 'block';
       document.getElementById('digite-texto').style.display = 'block';
       document.getElementById('btn-copy').style.display = 'none';
       document.getElementById('output').innerHTML = '';
      }
}

function copiar(){
    var textoCopy = textoInput;


    textoCopy.select();
    document.execCommand('copy');
    alert('copiado')
}

