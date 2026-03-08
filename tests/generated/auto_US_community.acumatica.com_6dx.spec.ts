import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_community.acumatica.com_6dx', ['https://community.acumatica.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
