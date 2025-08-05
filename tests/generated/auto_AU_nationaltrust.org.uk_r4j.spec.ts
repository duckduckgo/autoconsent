import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nationaltrust.org.uk_r4j', ['https://www.nationaltrust.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
