import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_luxurylondon.co.uk_udv', ['https://luxurylondon.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
