import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagenbank.de_w6l', ['https://www.volkswagenbank.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
