import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.koningshofholland.com_q45', ['https://de.koningshofholland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
