import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_leclercvoyages.com_2o4', ['https://www.leclercvoyages.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
