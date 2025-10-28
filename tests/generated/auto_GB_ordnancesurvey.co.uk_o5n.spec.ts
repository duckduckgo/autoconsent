import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ordnancesurvey.co.uk_o5n', ['https://www.ordnancesurvey.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
