import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_lecreuset.co.uk_0', ['https://www.lecreuset.co.uk/en_GB/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
