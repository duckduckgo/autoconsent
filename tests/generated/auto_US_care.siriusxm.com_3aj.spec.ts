import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_care.siriusxm.com_3aj', ['https://care.siriusxm.com/accountcenter/login'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
