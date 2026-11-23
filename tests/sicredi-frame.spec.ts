import generateCMPTests from '../playwright/runner';

generateCMPTests('sicredi-frame', ['https://ibpj.sicredi.com.br/', 'https://ibpf.sicredi.com.br/'], {
    testSelfTest: false,
});
