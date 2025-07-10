import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_codes.iccsafe.org_4az', ['https://codes.iccsafe.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
