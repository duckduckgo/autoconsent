import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_woolwarehouse.co.uk_t87', ['https://www.woolwarehouse.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
