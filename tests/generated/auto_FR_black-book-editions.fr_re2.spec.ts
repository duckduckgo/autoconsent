import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_black-book-editions.fr_re2', ['https://black-book-editions.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
