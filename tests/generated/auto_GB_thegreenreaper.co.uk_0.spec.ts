import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thegreenreaper.co.uk_0', ['https://www.thegreenreaper.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
