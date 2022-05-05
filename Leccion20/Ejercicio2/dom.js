function entrar(){
    // Lanzar un alert
    alert('Aviso, estamos entrando a la web');
    // Verificar si están habilitadas la coockies
    let texto = '';
    if(navigator.cookieEnabled){
        texto = 'Cookies están habilitadas';
    }else{
        texto = 'Cookies están inhabilitadas';
    }
    // Recuperando el objeto de resultado
    const resultado = document.getElementById('resultado');
    // Mostrando un nuevo texto en resultado
    resultado.innerHTML = texto;
}