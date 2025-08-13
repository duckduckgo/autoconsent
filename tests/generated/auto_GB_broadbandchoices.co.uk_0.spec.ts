import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_broadbandchoices.co.uk_0', ['https://www.broadbandchoices.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
