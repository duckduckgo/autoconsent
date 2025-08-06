import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_adultwork.com_ngi', ['https://www.adultwork.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
