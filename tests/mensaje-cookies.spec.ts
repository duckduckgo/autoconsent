import generateCMPTests from '../playwright/runner';

generateCMPTests('mensaje-cookies', ['https://www.poderjudicial.es/', 'https://www.idepa.es/'], {
    testOptIn: false,
});
