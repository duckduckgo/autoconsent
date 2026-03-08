import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.reserving.com_hvd', ['https://de.reserving.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
