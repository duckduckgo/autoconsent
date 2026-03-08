import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bigpotato.co.uk_4qx', ['https://bigpotato.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
