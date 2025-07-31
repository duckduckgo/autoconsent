import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thewestmorlandgazette.co.uk_7tk', ['https://www.thewestmorlandgazette.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
