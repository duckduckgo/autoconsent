import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundeswehr-und-mehr.de_3fd', ['https://www.bundeswehr-und-mehr.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
