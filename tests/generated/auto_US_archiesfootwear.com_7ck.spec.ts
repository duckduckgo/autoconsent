import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_archiesfootwear.com_7ck', ['https://archiesfootwear.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
