import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_planninggeek.co.uk_luf', ['https://www.planninggeek.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
