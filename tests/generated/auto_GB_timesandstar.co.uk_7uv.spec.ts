import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_timesandstar.co.uk_7uv', ['https://www.timesandstar.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
