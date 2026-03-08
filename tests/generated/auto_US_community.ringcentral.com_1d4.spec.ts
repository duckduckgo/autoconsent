import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_community.ringcentral.com_1d4', ['https://community.ringcentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
