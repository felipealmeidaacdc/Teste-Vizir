1- tenha o node instalado em sua maquina 
2- acesse a pasta server e rode o comando npm install dentro da pasta para baixar as dependencia do proejto.
3- rode o comando node app para excutar o projeto.
--------------------------------------------------------------
4 - acesse a pasta app e repita o passo 2
5 - rode o comando npm run serve para excutar o projeto.
---------------------------------------------------------------
6 - realizando os teste da api acesse a pasta server em seguida 
    rode o comando npm test 
    caso comando nao rode execute o comando <node node_modules/mocha/bin/mocha>
    ------------------------------------------------------------------------------
    ou altere a linha test no arquivo package.json <"test": " ./node_modules/mocha/bin/mocha --timeout 90000">  
---------------------------------------------------------------    
7 - cadastrando alguns enpoints planos e custos de teste 

http://localhost:3000/plans

{
    "name":"FaleMais30",
    "minutes":"30"
}

http://localhost:3000/costs

{
    "source_code":"011",
    "target_code":"016"
    "value":"1.90"
}

