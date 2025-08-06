import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labanquepostale.com_4ch', ['https://www.labanquepostale.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
