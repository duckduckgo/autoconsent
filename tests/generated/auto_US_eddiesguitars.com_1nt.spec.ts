import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_eddiesguitars.com_1nt', ['https://eddiesguitars.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
