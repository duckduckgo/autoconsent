import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_calendartimes.co.uk_yim', ['https://calendartimes.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
