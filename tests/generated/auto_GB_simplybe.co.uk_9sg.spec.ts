import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_simplybe.co.uk_9sg', ['https://www.simplybe.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
