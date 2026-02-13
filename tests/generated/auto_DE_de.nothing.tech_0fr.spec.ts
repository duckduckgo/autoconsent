import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.nothing.tech_0fr', ['https://de.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
