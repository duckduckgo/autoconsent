import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_capitalcardiology.com_pu5', ['https://capitalcardiology.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
