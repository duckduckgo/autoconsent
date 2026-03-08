import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ascentoptics.com_83z', ['https://ascentoptics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
