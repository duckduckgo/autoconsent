import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_woodburnerwarehouse.co.uk_ri1', ['https://www.woodburnerwarehouse.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
