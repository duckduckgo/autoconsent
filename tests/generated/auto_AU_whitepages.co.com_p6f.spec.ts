import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_whitepages.co.com_p6f', ['https://whitepages.co.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
