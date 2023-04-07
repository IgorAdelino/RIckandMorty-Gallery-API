import NavBar from "../../components/NavBar/NavBar";
import { Container } from "@mui/material";
import style from "./Home.module.css";

export function Home() {
  return (
    <>
      <NavBar />
      <div className={style.primaryView}>
        <Container className={style.Container}>
          <div className={style.titleLogo}>
            <h1>AS BIZARRAS TEORIAS DE</h1>
            <img src="/assets/logo.png" alt="" />
            <img src="/assets/title_image.jpg" alt="" />
          </div>
          <br />
          <div className={style.Theory}>
            <img src="/assets/firstTheory.jpg" alt="" />
            <br />
            <h2>1. A ex-esposa de Rick</h2>
            <br />
            <p>
              Talvez a teoria mais bizarra agrupada aqui, mas vamos lá. <br />
              <br />
              Não existe muita informação sobre a ex-esposa de Rick, a mãe de
              Beth. Tudo que se sabe é que ela não está mais por perto, seja por
              ter morrido ou por ter se separado de Rick. O que é certo é que
              ela deixou um espaço na vida dos personagens e que Rick é
              ressentido por isso. Para alguns fãs da série não existe dúvida
              alguma da identidade dessa mulher, trata-se de Srta. Frizzle!
              <br />
              <br />
              Se você não sabe quem é a Srta. Frizzle, não se preocupe, não é
              nenhuma personagem que já tenha aparecido em Rick and Morty. Ela é
              a protagonista de um desenho animado dos anos 90, O Ônibus Mágico.
              É uma professora dirigia um ônibus mágico e vivo, e que levava
              seus estudantes para várias aventuras científicas e educacionais.
              Suas viagens mágicas passavam por lugres como o interior de
              formigueiros ou dentro do corpo humano.
            </p>
            <br />
            <h3>Evidências</h3>
            <br />
            <p>
              A principal informação que sustenta esta teoria é o gosto de Rick
              para mulheres. No episódio Assimilação autoerótica (T2:Ep3), vemos
              Rick reencontrar Unity, sua ex-namorada, uma entidade que absorve
              indivíduos para dentro de sua mentalidade coletiva. Para realizar
              um de seus fetiches sexuais, Rick pede para que Unity lote um
              estádio com ruivas (deixemos os homens que pareçam com o pai de
              Rick de fora do argumento). Portanto, podemos concluir que ele
              sente algo com relação a ruivas. <br />
              <br />
              Outro ponto importante para esta teoria é o fato de Summer, neta
              Rick, também ser ruiva. Pois cabelos ruivos é um traço genético
              recessivo, conhecido por saltar gerações. Como Beth, mãe de
              Summer, não é ruiva, seria provável que a ex-esposa de Rick fosse
              ruiva. Com isso, os fãs pensaram em uma mulher que poderia atrair
              Rick não apenas por sua aparência, mas também pela sua paixão pela
              ciência.
              <br />
              <br /> Obviamente chegaram em Frizzle, a professora ruiva do
              ônibus mágico. Obviamente! A separação dos dois personagens pode
              ter ocorrido exatamente pelas opiniões contrárias dos dois
              personagens acerca do sistema educacional, já que Rick não acha a
              escola um lugar para pessoas inteligentes. Também vale lembrar que
              Rick já desenvolveu a tecnologia para transformar uma pessoa em um
              carro. Portanto o ônibus vivo que Srta. Frizzle dirige é
              totalmente possível na realidade de Rick and Morty.
            </p>
          </div>
          <div className={style.Theory}>
            <img src="/assets/secondTheory.jpg" alt="" />
            <br />
            <h2>2. Crossover com Gravity Falls</h2>
            <br />
            <p>
              Esta teoria diz que as séries Gravity Falls e Rick and Morty
              compartilham o mesmo universo (ou, pelo menos, um dos vários
              universos existentes). É inteiramente baseada em easter eggs
              presentes em Rick and Morty e de produtos derivados de Gravity
              Falls. <br />
              <br /> O fato de que Justin Royland e Alex Hirsch (os criadores de
              Rick and Morty e Gravity Falls, respectivamente) são grandes
              amigos contribui bastante para isso.
            </p>
            <br />
            <h3>Evidências</h3>
            <br />
            <p>
              No episódio 10 da primeira temporada de Rick and Morty, vemos os
              protagonistas fugir do Conselho dos Ricks. Em certo ponto, o Rick
              fugitivo cria vários portais para diferentes dimensões e entra em
              um deles. Depois, de um dos portais que ele não entra, saem três
              objetos: uma caneta, um bloco de notas e uma caneca com estampa de
              interrogação. Os mesmos objetos podem ser vistos engolidos por um
              portal no episódio 7 da segunda temporada de Gravity Falls.
              <br />
              <br /> Outro easter egg aparece no episódio 7 da segunda temporada
              de Rick and Morty. Em um dos computadores da terapia de casais
              alienígena, vemos a figura de Bill Cypher, o principal vilão e
              maior inimigo em Gravity Falls. <br />
              <br />A próxima evidência está presente no livro oficial de
              Gravity Falls. Em certo momento do livro é contada a história de
              Stanford Pines, um cientista da série. Diz que por anos ele esteve
              viajando pelo multiverso procurando um modo de derrota Bill
              Cypher, tornando-se um fora da lei no processo. Na página onde se
              encontra seu pôster de procurado pela justiça há uma mensagem
              criptografada que, quando resolvida, lê-se "Rick esteve aqui". Não
              existe nenhum personagem chamado Rick em Gravity Falls.
              <br />
              <br />
              No episódio 1 da terceira temporada de Rick and Morty, também
              podemos ver um Morty segurando um diário de Gravity Falls, um dos
              objetos mais importantes dessa série. Na mesma cena, ao fundo,
              também é possível ver dois outros Mortys vestidos como os
              personagens principais de Gravity Falls. Coincidência?! Acho que
              não!
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
