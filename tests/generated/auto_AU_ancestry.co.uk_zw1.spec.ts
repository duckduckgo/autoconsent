import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ancestry.co.uk_zw1', ['https://www.ancestry.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
