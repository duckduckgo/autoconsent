import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_westbrom.co.uk_0', ['https://www.westbrom.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
