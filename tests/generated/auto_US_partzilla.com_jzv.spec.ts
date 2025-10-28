import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_partzilla.com_jzv', ['https://www.partzilla.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
