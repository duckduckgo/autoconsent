import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bournefreelive.co.uk_d7k', ['https://bournefreelive.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
