import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_appliancehunter.co.uk_q6t', ['https://appliancehunter.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
