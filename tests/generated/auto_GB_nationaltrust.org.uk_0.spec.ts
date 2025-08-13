import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationaltrust.org.uk_0', ['https://www.nationaltrust.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
