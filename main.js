let lado_direito = document.querySelector('.lado-direito')
let mensagemErro = document.querySelector('#mensagem-erro')

function criptografaTexto(){
    let frase_escrita = document.querySelector('.input-texto').value
    

    const mapeamento = {
        'e' : 'enter',
        'i' : 'imes',
        'a' : 'ai',
        'o' : 'ober',
        'u' : 'ufat'
    }
    
    if(frase_escrita.trim() === ''){
        mensagemErro.textContent = 'O Campo não pode estar vazio.';
        return;
    } else {
    frase_nova = frase_escrita.replace(/[aeiou]/g, (letra) => mapeamento[letra] || letra);
    document.querySelector('.input-texto').value = ''
    lado_direito.innerHTML = 
    `<section class="lado-direito resultado-section">
            <div class="resultado-crip-decrip">
                <p class='textoFinal'>${frase_nova}</p>
            </div>
            <div>
                <button class="botao btn-descriptografar" onclick='copiarTexto()'>Copiar</button>
            </div>
    </section>`
}}

function decriptografaTexto(){
    let frase_escrita = document.querySelector('.input-texto').value

    if(frase_escrita.trim() === ''){
        mensagemErro.textContent = 'O Campo não pode estar vazio.';
        return;
    } else {

    let substituicoes = [
        {busca: /ai/g, substituicao: 'a'},
        {busca: /enter/g, substituicao: 'e'},
        {busca: /imes/g, substituicao: 'i'},
        {busca: /ober/g, substituicao: 'o'},
        {busca: /ufat/g, substituicao: 'u'},

    ]
    substituicoes.forEach(({busca, substituicao}) => {
        frase_escrita = frase_escrita.replace(busca, substituicao);
    });

    document.querySelector('.input-texto').value = ''
    lado_direito.innerHTML = 
    `<section class="lado-direito resultado-section">
            <div class="resultado-crip-decrip">
                <p class='textoFinal'>${frase_escrita}</p>
            </div>
            <div>
                <button class="botao btn-descriptografar" onclick='copiarTexto()'>Copiar</button>
            </div>
    </section>`
    }}

function copiarTexto() {
    let textoASerCopiado = document.querySelector('.textoFinal').textContent

    navigator.clipboard.writeText(textoASerCopiado);

    document.querySelector('.textoFinal').textContent = 'Nenhuma Mensagem'
         
}
    


