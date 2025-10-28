import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_paramo-clothing.com_a2g', ['https://paramo-clothing.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
