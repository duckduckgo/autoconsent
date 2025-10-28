import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_codes.iccsafe.org_r1i', ['https://codes.iccsafe.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
