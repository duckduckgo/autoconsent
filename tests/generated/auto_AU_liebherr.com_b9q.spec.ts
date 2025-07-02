import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_liebherr.com_b9q', ['https://www.liebherr.com/en-au/group/start-page-4862106'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
