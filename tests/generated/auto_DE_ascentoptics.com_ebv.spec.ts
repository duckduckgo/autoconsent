import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ascentoptics.com_ebv', ['https://ascentoptics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
