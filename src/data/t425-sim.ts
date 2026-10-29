export type T425Locale = 'en' | 'pt';

export const t425SimContent = {
  en: {
    title: 'T425-SIM',
    description: 'An evidence-oriented project for studying an audited T425 architectural path and its experimental boundaries.',
    eyebrow: 'Project / T425-SIM',
    statusNote: 'Overall project status: IN_TEST. A closed subsystem checkpoint does not establish complete T425 compatibility.',
    milestoneTitle: 'Milestone — authentic Hello World (28 October 2026)',
    milestoneIntro: 'An isolated experimental microprogrammed CORE ran the authentic 3,267-byte boot file and printed Hello world... to stdout through a host-side SP_PUTS service. The test completed the host response, architectural RX and SP_EXIT with CPU_ERROR=0.',
    milestoneEvidence: ['Authentic boot image: 3,267/3,267 bytes consumed', 'Natural SP_PUTS frame: 24 bytes; literal Hello world... printed once to stdout', 'Host response 01 00 00; two architectural RX commits (2 + 1 bytes)', 'Natural SP_EXIT frame: 8 bytes; 32 TX bytes and 32 harness ACKs in total', 'Runner exit status 0; directed regression tests passed'],
    milestoneCaveat: 'Scope: experimental F161-FIX19 harness only. ACKs were simulated by HARNESS_PEER, not measured on the physical PHY. F36/F45/F98 CORE changes are not promoted to the canonical tree; Rev.C equivalence and production ISERVER integration remain under review.',
    baselineTitle: 'Architectural baseline',
    baselineIntro: 'The project keeps an explicit separation between the conceptual processor path and platform-specific transport. The map is an audited architectural path, not a claim of complete compatibility.',
    coreTitle: 'Audited architectural path',
    coreIntro: 'The documented baseline includes the following architectural areas. This list is evidence of an audited path, not proof of a complete IMS T425 implementation.',
    boundaryTitle: 'CORE ↔ Link Service ↔ PHY',
    boundaryIntro: 'The boundary assigns responsibility without collapsing architectural semantics into hardware details.',
    checkpointTitle: 'Validated PHY checkpoint',
    checkpointIntro: 'The project documentation records this PHY checkpoint as validated. It is deliberately narrower than the overall project status.',
    limitationsTitle: 'Outside this checkpoint',
    limitationsIntro: 'The following remain outside the cited PHY validation and are future or still-open work:',
    outsideLabel: 'Work outside the validated PHY checkpoint',
    serviceLabel: 'System-service behavior not claimed by this checkpoint',
    outside: ['VM', 'OCCAM execution and integration', 'Helios integration', 'Remaining system-service behavior not closed by the cited PHY work'],
    core: ['Instruction/opcode and OReg processing', 'CROM entry', '118-bit MIR', 'Datapath', 'Condition selection', 'NEXTMPC / microsequencing', 'Scheduler/process semantics', 'Timers', 'Channel semantics'],
    boundary: [
      ['CORE', 'Architectural channels, WAIT/TAKE, process state, scheduler and architectural IN/OUT.'],
      ['LINK SERVICE', 'Transport abstraction and endpoint routing between logical processor/channel behavior and physical transport.'],
      ['PHY', 'PIO/FIFO/IRQ/DMA mechanisms where applicable, physical per-link state, token/event attribution and physical DATA/ACK behavior. Physical ACK remains PHY-local.']
    ],
    checkpoint: ['Four full-duplex physical links', 'Two PIO state machines per link; eight PIO state machines total', 'Endpoint 0..3 maps to architectural Link0..3 only at the CORE-PHY seam', 'Physical ACK per DATA byte remains PHY-local', 'One outstanding DATA byte per direction', 'Outgoing ACK bypasses DATA wait', 'Portable CORE has no RP2040/PIO/DMA/GPIO dependency', 'RX admission is controlled by CORE architectural state', 'External IN lifetime is explicit', 'Multibyte RX credit is rearmed one byte at a time', 'N+1 remains unaccepted/unACKed until another architectural IN'],
    limitations: ['Error / ErrorIn', 'Analyse / HaltOnError', 'EventReq / EventAck / EventWaiting', 'ProcSpeedSelect', 'DisableIntRAM']
  },
  pt: {
    title: 'T425-SIM',
    description: 'Projeto orientado por evidências para estudar um caminho arquitetural auditado do T425 e seus limites experimentais.',
    eyebrow: 'Projeto / T425-SIM',
    statusNote: 'Status geral do projeto: IN_TEST. Um checkpoint de subsistema fechado não estabelece compatibilidade completa com o T425.',
    milestoneTitle: 'Marco — Hello World autêntico (28 de outubro de 2026)',
    milestoneIntro: 'Um CORE microprogramado experimental e isolado executou o BTL autêntico de 3.267 bytes e imprimiu Hello world... em stdout por meio do serviço host SP_PUTS. O ensaio concluiu a resposta host, o RX arquitetural e SP_EXIT com CPU_ERROR=0.',
    milestoneEvidence: ['BTL autêntico: 3.267/3.267 bytes consumidos', 'Frame SP_PUTS natural: 24 bytes; Hello world... impresso uma vez em stdout', 'Resposta host 01 00 00; dois commits RX arquiteturais (2 + 1 bytes)', 'Frame SP_EXIT natural: 8 bytes; 32 bytes TX e 32 ACKs do harness no total', 'Runner encerrou com status 0; regressões dirigidas aprovadas'],
    milestoneCaveat: 'Escopo: somente o harness experimental F161-FIX19. Os ACKs foram simulados pelo HARNESS_PEER, não medidos na PHY física. As alterações F36/F45/F98 não foram promovidas ao canônico; a equivalência Rev.C e a integração ao ISERVER de produção continuam em revisão.',
    baselineTitle: 'Base arquitetural',
    baselineIntro: 'O projeto mantém uma separação explícita entre o caminho conceitual do processador e o transporte específico da plataforma. O mapa é um caminho arquitetural auditado, não uma alegação de compatibilidade completa.',
    coreTitle: 'Caminho arquitetural auditado',
    coreIntro: 'A base documentada inclui as áreas arquiteturais abaixo. A lista evidencia um caminho auditado, não uma implementação completa do IMS T425.',
    boundaryTitle: 'CORE ↔ Link Service ↔ PHY',
    boundaryIntro: 'A fronteira distribui responsabilidades sem misturar semântica arquitetural com detalhes de hardware.',
    checkpointTitle: 'Checkpoint PHY validado',
    checkpointIntro: 'A documentação do projeto registra este checkpoint PHY como validado. Ele é deliberadamente mais estreito que o status geral do projeto.',
    limitationsTitle: 'Fora deste checkpoint',
    limitationsIntro: 'Os itens abaixo permanecem fora da validação PHY citada e são trabalho futuro ou ainda aberto:',
    outsideLabel: 'Trabalho fora do checkpoint PHY validado',
    serviceLabel: 'Comportamentos de serviços do sistema não afirmados por este checkpoint',
    outside: ['VM', 'Execução e integração de OCCAM', 'Integração com Helios', 'Comportamentos restantes de serviços do sistema não fechados pelo trabalho PHY citado'],
    core: ['Processamento de instruções/opcodes e OReg', 'Entrada na CROM', 'MIR de 118 bits', 'Datapath', 'Seleção de condição', 'NEXTMPC / microsequenciamento', 'Semântica de processos/escalonador', 'Temporizadores', 'Semântica de canais'],
    boundary: [
      ['CORE', 'Canais arquiteturais, WAIT/TAKE, estado de processo, escalonador e IN/OUT arquiteturais.'],
      ['LINK SERVICE', 'Abstração de transporte e roteamento de endpoints entre o comportamento lógico de processadores/canais e o transporte físico.'],
      ['PHY', 'Mecanismos PIO/FIFO/IRQ/DMA quando aplicáveis, estado físico por link, atribuição de tokens/eventos e comportamento físico DATA/ACK. O ACK físico continua local ao PHY.']
    ],
    checkpoint: ['Quatro links físicos full-duplex', 'Duas máquinas PIO por link; oito máquinas PIO no total', 'Endpoint 0..3 mapeia para Link0..3 arquiteturais apenas na fronteira CORE-PHY', 'O ACK físico por byte DATA continua local ao PHY', 'Um byte DATA pendente por direção', 'ACK de saída contorna a espera por DATA', 'O CORE portável não depende de RP2040/PIO/DMA/GPIO', 'A admissão RX é controlada pelo estado arquitetural do CORE', 'A vida útil do IN externo é explícita', 'O crédito RX multibyte é rearmado um byte por vez', 'N+1 permanece não aceito/não ACKado até outro IN arquitetural'],
    limitations: ['Error / ErrorIn', 'Analyse / HaltOnError', 'EventReq / EventAck / EventWaiting', 'ProcSpeedSelect', 'DisableIntRAM']
  }
} as const;
