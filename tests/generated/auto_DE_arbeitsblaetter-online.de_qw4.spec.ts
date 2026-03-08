import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_arbeitsblaetter-online.de_qw4', ['https://arbeitsblaetter-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
