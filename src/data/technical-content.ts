export type TechnicalLocale = 'en' | 'pt';

export const architectureLayers = {
  en: [
    ['APPLICATION / OCCAM', 'Concurrent application intent lives here: processes describe work and communicate through channels.'],
    ['VM', 'A boundary for controlled execution and experiments. It lets a modern test ask a focused question without claiming to reproduce every original behavior.'],
    ['T425 CORE', 'The architectural processor boundary: scheduler, timers, channels, microcode and datapath are the concepts gathered here.'],
    ['LINK SERVICE', 'The seam between logical processor/channel behavior and platform-specific physical transport. Keeping this boundary visible helps experiments stay honest.'],
    ['PHY', 'The physical engine owns timing and token transport on an actual link. Its presence in the map does not claim that every implementation is complete.'],
    ['DATA / ACK → NETWORK', 'Physical endpoints exchange tokens across a network. DATA and ACK are transport concepts here, not a claim about a complete product or protocol stack.']
  ],
  pt: [
    ['APLICAÇÃO / OCCAM', 'A intenção da aplicação concorrente vive aqui: processos descrevem trabalho e se comunicam por canais.'],
    ['VM', 'Uma fronteira de execução controlada e de experimentos. Um teste moderno pode fazer uma pergunta focada sem alegar reproduzir todo o comportamento original.'],
    ['T425 CORE', 'A fronteira do processador arquitetural: escalonador, temporizadores, canais, microcódigo e datapath são os conceitos reunidos aqui.'],
    ['LINK SERVICE', 'A separação entre o comportamento lógico de processadores/canais e o transporte físico específico da plataforma. Manter esse limite visível torna os experimentos mais honestos.'],
    ['PHY', 'O motor físico cuida do tempo e do transporte de tokens em um link real. Aparecer no mapa não significa que toda implementação esteja completa.'],
    ['DATA / ACK → REDE', 'Endpoints físicos trocam tokens pela rede. DATA e ACK são conceitos de transporte aqui, não uma afirmação de produto ou pilha completa.']
  ]
} as const;

export const documentationTaxonomy = {
  en: [
    ['Primary documentation', 'Original manufacturer and architecture documentation. Record the source before drawing conclusions.'],
    ['Interpretation', 'Engineering reading and derived understanding, clearly separated from what the source states directly.'],
    ['Implementation', 'Modern source code and configuration used to implement a particular experiment.'],
    ['Experiment / evidence', 'Reproducible procedures, observations and measurements, with limits stated alongside results.'],
    ['Planned work', 'Requirements and intended experiments that have not yet been validated.']
  ],
  pt: [
    ['Documentação primária', 'Documentação original do fabricante e da arquitetura. A fonte vem antes das conclusões.'],
    ['Interpretação', 'Leitura de engenharia e entendimento derivado, separado do que a fonte afirma diretamente.'],
    ['Implementação', 'Código-fonte e configuração modernos usados em um experimento específico.'],
    ['Experimento / evidência', 'Procedimentos reproduzíveis, observações e medições, sempre com seus limites.'],
    ['Trabalho planejado', 'Requisitos e experimentos pretendidos que ainda não foram validados.']
  ]
} as const;

export const labRecord = {
  en: [
    ['Question / hypothesis', 'What is the smallest question the experiment should answer?'],
    ['Setup', 'Which board, wiring, firmware and instruments are involved?'],
    ['Artifact version', 'Record the source revision, binary or configuration under test.'],
    ['Procedure', 'Write steps another engineer can repeat without guessing.'],
    ['Measurement', 'Capture observations and values; running code alone is not evidence.'],
    ['Result', 'State what the measurement supports and what it does not support.'],
    ['Limitations', 'Name reachability, placement, hardware and interpretation limits.'],
    ['Reproduction notes', 'Keep the details needed to repeat or challenge the result.']
  ],
  pt: [
    ['Pergunta / hipótese', 'Qual é a menor pergunta que o experimento deve responder?'],
    ['Montagem', 'Quais placa, ligações, firmware e instrumentos participam?'],
    ['Versão do artefato', 'Registre revisão do código, binário ou configuração testada.'],
    ['Procedimento', 'Descreva passos que outra pessoa possa repetir sem adivinhar.'],
    ['Medição', 'Capture observações e valores; código executar sozinho não é evidência.'],
    ['Resultado', 'Diga o que a medição sustenta e o que ela não sustenta.'],
    ['Limitações', 'Registre limites de alcance, posicionamento, hardware e interpretação.'],
    ['Notas de reprodução', 'Guarde detalhes para repetir ou contestar o resultado.']
  ]
} as const;
