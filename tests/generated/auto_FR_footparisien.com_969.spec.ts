import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_footparisien.com_969', ['https://www.footparisien.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
