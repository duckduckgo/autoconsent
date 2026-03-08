import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.orthofeet.com_gia', ['https://de.orthofeet.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
