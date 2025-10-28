import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_demokrateam.org_0po', ['https://www.demokrateam.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
