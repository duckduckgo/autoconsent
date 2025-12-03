import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.virginmoney.com_0', ['https://uk.virginmoney.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
