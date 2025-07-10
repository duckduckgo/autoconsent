import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_knivesandtools.co.uk_tmp', ['https://www.knivesandtools.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
