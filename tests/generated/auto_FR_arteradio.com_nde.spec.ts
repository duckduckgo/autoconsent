import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arteradio.com_nde', ['https://www.arteradio.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
