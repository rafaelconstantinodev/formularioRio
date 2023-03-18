function cadastrar() { // variaveis para armazenar os dados preenchidos
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email = document.getElementById('email').value
    let telfixo = document.getElementById('telfixo').value
    let celular = document.getElementById('celular').value
    let endereco = document.getElementById('endereco').value
    let bairro = document.getElementById('bairro').value
    let municipio = document.getElementById('municipio').value
    let res = document.getElementById('resposta')

    if (nome == '') { // condições das respostas
        alert('Campo Nome está vazio!!! ')
    } else if (sobrenome == '') {
        alert('Campo Sobrenome está vazio!!! ')
    } else if (email == '') {
        alert('Campo email vazio!!!')
    } else if (celular == '') {
        alert('Campo Celular vazio!!!')
    } else if (endereco == '') {
        alert('Campo Endereço vazio!!!')
    } else if (bairro == '') {
        alert('Campo Bairro vazio!!!')
    } else if (municipio == '') {
        alert('Campo Municipio vazio!!!')
    }
    
    else {
        let botao = document.createElement("button"); // cria um botão em JS
        botao.textContent = "Enviar"; // customização do botão
        botao.id = "meuBotao";
        botao.style.backgroundColor = "#004680";
        botao.style.color = "#FEFDFD";
        botao.style.fontSize = "18px";
        botao.style.borderRadius = "10px"
        botao.style.width = '100px';
        botao.style.height = '40px';
        botao.addEventListener("click", function() { // função final
            document.write('Seus dados foram cadastrados em nosso sistema! <hr>')
            document.write('Para mais informações sobre desenvolvimento web, entre em contato comigo pelo link abaixo: <br> <hr>')
            document.write('<a href="https://www.instagram.com/r.constantino13" target="_self">Rafael Constantino</a>')
        })
        res.innerHTML = 
            `<div style=" font-weight: bold; text-align: center;">Obrigado por realizar o seu cadastro.</div> <br>

            <div style=" font-weight: bold; text-align: center;">Aqui estão suas informações:</div> <br>

            <div style="text-indent: 20px;">
            Sr(a) <strong>${nome}</strong> <strong>${sobrenome}</strong> - residente no endereço: <br>
            <strong>${endereco}</strong> no Bairro de <strong>${bairro}</strong> em <strong>${municipio}</strong>. <br>
            Está devidamente <strong>cadastrado(a)</strong> para receber os beneficios do programa
            da Prefeitura do Estado do Rio de Janeiro. <br>
            Tendo como meios de contato as seguintes informações: <br>
            Telefone fixo - <strong>${telfixo}</strong> <br>
            Celular - <strong>${celular}</strong> <br>
            Email - <strong>${email}</strong> <br>
            </div> <br>
            
            <div style="text-indent: 20px; margin:20px;">
                <small>
                    Ao clicar em <strong>"Enviar"</strong>, declaro para os devidos fins de direito, sob as
                    penas da lei, que as informações prestadas e documentos que apresento
                    para este cadastro, relacionados acima, são <strong>verdadeiros e autênticos</strong>
                    (fieis a verdade e condizentes com a realidade dos fatos à época).<br>
                    Fico ciente através desse documento que a falsidade dessa declaração configura crime previsto no <strong>Código Penal Brasileiro</strong>, passível de apuração na forma da Lei bem como pode ser enquadrada como litigância de Má-Fé.
                </small>
            </div>`

            res.appendChild(botao); // exibe a resposta na div

            document.getElementById('resultado').appendChild(botao); // coloca o botão criado dentro da div de resposta
    }
}