import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_emedienbayern.onleihe.de_3ds', ['https://emedienbayern.onleihe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
