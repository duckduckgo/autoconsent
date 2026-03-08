import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.beta-layout.com_mvd', ['https://de.beta-layout.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
