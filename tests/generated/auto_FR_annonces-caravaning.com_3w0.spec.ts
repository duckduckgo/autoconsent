import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_annonces-caravaning.com_3w0', ['https://www.annonces-caravaning.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
