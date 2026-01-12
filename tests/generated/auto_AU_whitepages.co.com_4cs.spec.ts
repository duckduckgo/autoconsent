import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_whitepages.co.com_4cs', ['https://whitepages.co.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
