import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tescoinsurance.com_wwu', ['https://www.tescoinsurance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
