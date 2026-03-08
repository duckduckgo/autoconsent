import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.kindle-tech.com_5kx', ['https://de.kindle-tech.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
