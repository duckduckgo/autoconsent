import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theaudioinsights.com_hzl', ['https://www.theaudioinsights.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
