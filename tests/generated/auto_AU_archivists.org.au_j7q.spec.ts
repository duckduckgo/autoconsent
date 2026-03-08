import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_archivists.org.au_j7q', ['https://archivists.org.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
