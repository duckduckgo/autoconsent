import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_michael-nehls.de_fqt', ['https://michael-nehls.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
