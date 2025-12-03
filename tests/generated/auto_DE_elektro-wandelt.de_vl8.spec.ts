import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elektro-wandelt.de_vl8', ['https://www.elektro-wandelt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
