import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fordmoney.co.uk_0', ['https://www.fordmoney.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
