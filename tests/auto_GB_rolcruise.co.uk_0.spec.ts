import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_rolcruise.co.uk_0', ['https://www.rolcruise.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
