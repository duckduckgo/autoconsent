import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sthelensstar.co.uk_d1r', ['https://www.sthelensstar.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
