const inputTexto = document.querySelector("#texto-inicial");
const mensagem = document.querySelector("#texto-resultante");

function botaoEncriptar(){
	const textoEncriptado = encriptar(inputTexto.value);
	mensagem.value = textoEncriptado;
}

function botaoDescriptar() {
	const textoDescriptado = desencriptar(inputTexto.value);
	mensagem.value = textoDescriptado;
}

function encriptar(stringEncriptada) {
	let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
	stringEncriptada = stringEncriptada.toLowerCase();

	for (var i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
		}
	}
	return stringEncriptada;
}

function desencriptar(stringEncriptada) {
	let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']]
	stringEncriptada = stringEncriptada.toLowerCase();

	for (var i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][1])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
		}
	}
	return stringEncriptada;
}

function botaoCopiar() {
  let copyText = document.querySelector("#texto-resultante");
  copyText.select();
  document.execCommand("copy");
}




