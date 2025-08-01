import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stellantis.com_evm', ['https://www.stellantis.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
