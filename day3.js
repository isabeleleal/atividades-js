areaUm = 'front-end';
areaDois = 'back-end';

area = prompt("Qual área você deseja seguir, front-end ou back-end?");

sim = 'sim';
nao = 'não';

if (area === areaUm){
    linguagem = prompt("Deseja aprender React ou Vue?");
    linguagemUm = 'React';
    linguagemDois = 'Vue';
    if (linguagem === linguagemUm || linguagemDois){
        desejoUm = prompt("Deseja seguir a area de front-end?");
        prompt("Deseja seguir se desenvolvendo para se tornar fullstack?")
    }if (desejoUm === sim  || nao){
        prompt("Quais tecnologias que você quer se especializar ou conhecer?")
    }
    
}else{
    if (area === areaDois){
        linguagem = prompt("Deseja aprender C# ou Java?");
        linguagemUm = 'C#';
        linguagemDois = 'Java';
        if (linguagem === linguagemUm || linguagemDois)
        desejoUm = prompt("Deseja seguir a area de back-end?");
        prompt("Deseja seguir se desenvolvendo para se tornar fullstack?")
    }if (desejoUm === sim || nao){
        prompt("Quais tecnologias que você quer se especializar ou conhecer?")
    
    }
}


    
