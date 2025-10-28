import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_getoutside.ordnancesurvey.co.uk_nax', ['https://getoutside.ordnancesurvey.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
