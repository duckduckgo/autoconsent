import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_calculatemystampduty.co.uk_6os', ['https://calculatemystampduty.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
