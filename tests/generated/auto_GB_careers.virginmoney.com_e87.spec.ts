import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.virginmoney.com_e87', ['https://careers.virginmoney.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
