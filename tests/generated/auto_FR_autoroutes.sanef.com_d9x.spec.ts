import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autoroutes.sanef.com_d9x', ['https://www.autoroutes.sanef.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
