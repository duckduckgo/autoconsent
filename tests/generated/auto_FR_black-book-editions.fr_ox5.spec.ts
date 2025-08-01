import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_black-book-editions.fr_ox5', ['https://black-book-editions.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
