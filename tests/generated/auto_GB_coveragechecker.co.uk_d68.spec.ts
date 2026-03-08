import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_coveragechecker.co.uk_d68', ['https://coveragechecker.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
