import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kubotausa.com_yn9', ['https://www.kubotausa.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
