import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_healthspan.co.uk_eyp', ['https://www.healthspan.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
