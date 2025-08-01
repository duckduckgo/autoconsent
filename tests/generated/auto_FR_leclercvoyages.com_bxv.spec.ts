import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_leclercvoyages.com_bxv', ['https://www.leclercvoyages.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
