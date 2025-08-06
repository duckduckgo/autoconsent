import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nanarland.com_xsv', ['https://www.nanarland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
