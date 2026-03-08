import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.personello.com_trr', ['https://de.personello.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
