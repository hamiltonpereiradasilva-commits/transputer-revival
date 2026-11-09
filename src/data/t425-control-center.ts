export const controlCenterContent = {
  en: {
    title: 'T425-SIM Control Center',
    description: 'A native desktop control and diagnostics application for the T425-SIM and LINKUSB.',
    eyebrow: 'Desktop application · Host tools',
    status: 'Host application and diagnostics are available; physical Hello World execution with the K6 build is not verified.',
    sections: [
      ['Purpose', 'A native Python desktop application for selecting OCCAM BTL files, observing the T425-SIM and LINKUSB, and supervising the original INMOS IServer.'],
      ['Diagnostics', 'The application presents T425 F271 CDC and LINKUSB B4 snapshots, including the limits of fields that are not instrumented. USB acceptance is kept distinct from physical DATA/ACK and architectural consumption.'],
      ['IServer integration', 'The host integration uses the original INMOS IServer and a LINKUSB LinkIO backend. The K6 diagnostic executable includes the tested SP file-id decoding change; it does not replace the original SP protocol.'],
      ['Latest validation · 9 November 2026', 'K6 host tests passed. The physical retest could not open LINKUSB Link0 before Boot, so no K6 BTL transfer or Hello World output is claimed. An earlier run with the standard executable transferred the BTL but failed while validating the SP reply.'],
      ['Operational boundary', 'The desktop application is not evidence by itself that a guest program ran. Physical boot, IServer service requests, program output and normal SP_EXIT must be observed separately.']
    ]
  },
  pt: {
    title: 'T425-SIM Control Center',
    description: 'Aplicativo desktop nativo para controle e diagnóstico do T425-SIM e do LINKUSB.',
    eyebrow: 'Aplicativo desktop · Ferramentas host',
    status: 'Aplicativo e diagnósticos host disponíveis; execução física do Hello World com o build K6 ainda não validada.',
    sections: [
      ['Objetivo', 'Aplicativo desktop nativo em Python para selecionar arquivos BTL OCCAM, observar o T425-SIM e o LINKUSB e supervisionar o IServer original da INMOS.'],
      ['Diagnósticos', 'A aplicação apresenta snapshots CDC F271 do T425 e B4 do LINKUSB, indicando os limites dos campos não instrumentados. Aceitação USB permanece distinta de DATA/ACK físico e do consumo arquitetural.'],
      ['Integração com o IServer', 'A integração host utiliza o IServer original da INMOS e um backend LinkIO para LINKUSB. O executável diagnóstico K6 inclui a alteração de leitura do fileid SP testada em host; o protocolo SP original foi preservado.'],
      ['Validação mais recente · 9 de novembro de 2026', 'Os testes host K6 passaram. O reteste físico não conseguiu abrir o Link0 do LINKUSB antes do Boot; portanto, não se afirma transferência BTL nem saída Hello World com K6. Uma execução anterior com o executável padrão transferiu o BTL, mas falhou ao validar a resposta SP.'],
      ['Limite operacional', 'A existência do aplicativo não comprova que um programa guest executou. Boot físico, requisições ao IServer, saída do programa e SP_EXIT normal precisam ser observados separadamente.']
    ]
  }
} as const;
