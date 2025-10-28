import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationaltoolhireshops.co.uk_wjp', ['https://www.nationaltoolhireshops.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
