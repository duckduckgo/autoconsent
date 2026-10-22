import generateCMPTests from '../playwright/runner';

generateCMPTests('iubenda-rti', ['https://mediasetinfinity.mediaset.it/', 'https://www.tgcom24.mediaset.it/'], {
    testOptIn: false,
    testSelfTest: false,
});
