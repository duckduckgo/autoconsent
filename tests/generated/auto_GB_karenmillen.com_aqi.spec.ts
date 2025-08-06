import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_karenmillen.com_aqi', ['https://www.karenmillen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
