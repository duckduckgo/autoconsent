import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theoldhamtimes.co.uk_5of', ['https://www.theoldhamtimes.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
