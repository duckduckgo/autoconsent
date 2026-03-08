import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cleavermeatsltd.co.uk_984', ['https://cleavermeatsltd.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
