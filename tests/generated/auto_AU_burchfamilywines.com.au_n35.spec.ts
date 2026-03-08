import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_burchfamilywines.com.au_n35', ['https://burchfamilywines.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
