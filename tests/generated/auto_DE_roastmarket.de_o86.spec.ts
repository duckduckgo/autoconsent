import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_roastmarket.de_o86', ['https://www.roastmarket.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
