import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_summithealth.com_w1n', ['https://www.summithealth.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
