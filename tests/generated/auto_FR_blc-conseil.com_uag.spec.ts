import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blc-conseil.com_uag', ['https://blc-conseil.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
