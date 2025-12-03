import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_healthspan.co.uk_q4v', ['https://www.healthspan.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
