import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_capitalone.co.uk_0', ['https://www.capitalone.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
