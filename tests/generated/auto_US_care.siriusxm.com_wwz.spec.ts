import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_care.siriusxm.com_wwz', ['https://care.siriusxm.com/accountcenter/login'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
