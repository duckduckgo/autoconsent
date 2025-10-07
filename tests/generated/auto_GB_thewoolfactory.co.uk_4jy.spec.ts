import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thewoolfactory.co.uk_4jy', ['https://www.thewoolfactory.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
