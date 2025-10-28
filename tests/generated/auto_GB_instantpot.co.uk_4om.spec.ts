import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_instantpot.co.uk_4om', ['https://instantpot.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
