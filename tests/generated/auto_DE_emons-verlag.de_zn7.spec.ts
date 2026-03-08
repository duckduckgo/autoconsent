import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_emons-verlag.de_zn7', ['https://emons-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
