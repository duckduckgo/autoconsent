import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationaltoolhireshops.co.uk_es3', ['https://www.nationaltoolhireshops.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
