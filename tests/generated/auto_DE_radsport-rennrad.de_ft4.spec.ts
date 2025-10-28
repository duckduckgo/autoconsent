import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_radsport-rennrad.de_ft4', ['https://www.radsport-rennrad.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
