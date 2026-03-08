import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_automobilsalon-bellemann.de_4y7', ['https://automobilsalon-bellemann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
