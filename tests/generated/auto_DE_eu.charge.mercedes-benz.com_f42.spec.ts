import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eu.charge.mercedes-benz.com_f42', ['https://eu.charge.mercedes-benz.com/web/de/mb-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
