import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lothianbuses.com_cye', ['https://www.lothianbuses.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
