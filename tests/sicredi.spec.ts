import generateCMPTests from '../playwright/runner';

generateCMPTests('sicredi', ['https://ibpj.sicredi.com.br/', 'https://www.sicredi.com.br/', 'https://auniaofazavida.com.br/'], {
    testSelfTest: false,
});
