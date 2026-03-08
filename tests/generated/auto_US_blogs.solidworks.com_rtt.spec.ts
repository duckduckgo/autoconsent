import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_blogs.solidworks.com_rtt', ['https://blogs.solidworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
