import useSystemStore from "../../hooks/useSystemStore";
import Window from "../Windows/Window";

interface Props {
    position: { x: number, y: number }
}

function ResumeProgram(props: Props) {
    const store = useSystemStore();
    return (<Window onClose={() => store.setOpen("resume", false)} id="resume" title="Resume" position={props.position}>
        <div style={{
            border: '2px outset #ccc ',
            boxShadow: '1px 1px 0 0 #333',
        }} className="overflow-y-scroll bg-white h-96 rounded p-3">
            <div>
                <p><b>=== GABRIEL DA SILVA FRANCISCO ===<br /></b>Analista de Suporte<br />Telefone: (51) 99867-3148 |
                    Email: brielsfrancisco@gmail.com<br /></p>
                <p>============================================================<br />OBJETIVO<br />------------------------------------------------------------<br />Atuar
                    como desenvolvedor full stack utilizando C#, PHP e<br />JavaScript, contribuindo com a equipe e
                    evoluindo tecnicamente.<br /></p>
                <p>============================================================<br />EXPERI&#202;NCIA
                    PROFISSIONAL<br />------------------------------------------------------------<br />[Chaveiro Sul] -
                    T&#233;cnico em Reparo Automotivo<br />Per&#237;odo: 12/2018 - Atual<br /> - Atendimento ao
                    p&#250;blico<br /> - Gest&#227;o de caixa e emiss&#227;o de notas fiscais<br /> - Servi&#231;os de
                    chaveiro automotivo<br /> - Reparo el&#233;trico e programa&#231;&#227;o de m&#243;dulos de
                    inje&#231;&#227;o<br /></p>
                <p>[Foro Central de Porto Alegre] - Estagi&#225;rio<br />Per&#237;odo: 03/2017 - 12/2017<br /> -
                    Organiza&#231;&#227;o de processos<br /> - Digita&#231;&#227;o de protocolos<br /> - Rotinas
                    administrativas<br /></p>
                <p>============================================================<br />FORMA&#199;&#195;O<br />------------------------------------------------------------<br />
                    <p>Universidade do Vale do Rio dos Sinos(Unisinos).</p>
                    <p>Cursando Tecnólogo em Análise e Desenvolvimento de Sistemas.</p>
                    Iniciado em Novembro de 2025.
                    Prazo de conclusão prevista para em 2028.
                </p>
                <p>============================================================<br />HABILIDADES<br />------------------------------------------------------------<br />
                    - Comunica&#231;&#227;o<br /> - Trabalho em equipe<br /> - Proatividade<br /> - Resolu&#231;&#227;o de
                    problemas<br /> - Organiza&#231;&#227;o<br /></p>
                <p>============================================================<br />CONHECIMENTOS /
                    CURSOS<br />------------------------------------------------------------<br /> - C# e .NET<br /> - PHP 7
                    e 8<br /> - JavaScript (Node.js, React, Next.js)<br /> - HTML e CSS<br /> - MySQL e PostgreSQL<br /> -
                    DDD, SOLID, Clean Architecture<br /> - Eletr&#244;nica b&#225;sica e Arduino<br /> - Ingl&#234;s
                    intermedi&#225;rio/avan&#231;ado<br /></p>
                <p>============================================================<br />STATUS: ONLINE<br />&#218;LTIMA
                    ATUALIZA&#199;&#195;O: 2026</p>

            </div>
        </div>
    </Window>);
}

export default ResumeProgram;