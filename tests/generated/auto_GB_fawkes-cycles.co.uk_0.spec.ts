import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fawkes-cycles.co.uk_0', ['https://fawkes-cycles.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
