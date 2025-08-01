import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thegazette.co.uk_0', ['https://www.thegazette.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
