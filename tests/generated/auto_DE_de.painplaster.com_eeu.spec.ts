import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.painplaster.com_eeu', ['https://de.painplaster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
