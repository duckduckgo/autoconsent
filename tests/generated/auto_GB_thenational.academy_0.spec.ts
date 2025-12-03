import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thenational.academy_0', ['https://www.thenational.academy/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
