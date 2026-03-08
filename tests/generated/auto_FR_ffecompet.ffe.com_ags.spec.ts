import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ffecompet.ffe.com_ags', ['https://ffecompet.ffe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
