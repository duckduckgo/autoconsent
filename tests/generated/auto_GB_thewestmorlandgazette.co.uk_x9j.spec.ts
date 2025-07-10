import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thewestmorlandgazette.co.uk_x9j', ['https://www.thewestmorlandgazette.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
