import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_swindonadvertiser.co.uk_7ox', ['https://www.swindonadvertiser.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
