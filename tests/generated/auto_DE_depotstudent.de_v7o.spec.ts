import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_depotstudent.de_v7o', ['https://depotstudent.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
