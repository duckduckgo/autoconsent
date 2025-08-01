import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mrduesseldorf.de_8nb', ['https://www.mrduesseldorf.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
