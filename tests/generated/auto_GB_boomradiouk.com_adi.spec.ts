import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boomradiouk.com_adi', ['https://www.boomradiouk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
