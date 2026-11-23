import generateCMPTests from '../playwright/runner';

generateCMPTests('sicredi', ['https://www.sicredi.com.br/', 'https://auniaofazavida.com.br/'], {
    testSelfTest: false,
});
