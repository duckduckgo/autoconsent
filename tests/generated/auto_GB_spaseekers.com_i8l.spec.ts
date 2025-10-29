import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_spaseekers.com_i8l', ['https://www.spaseekers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
