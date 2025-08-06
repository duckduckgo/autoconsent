import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_leclercvoyages.com_u81', ['https://www.leclercvoyages.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
