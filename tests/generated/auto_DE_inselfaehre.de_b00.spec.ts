import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_inselfaehre.de_b00', ['https://www.inselfaehre.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
