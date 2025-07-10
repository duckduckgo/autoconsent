import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_chick-fil-a.com_zza', ['https://www.chick-fil-a.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
