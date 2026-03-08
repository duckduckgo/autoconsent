import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_albertgoodman.co.uk_4q3', ['https://albertgoodman.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
