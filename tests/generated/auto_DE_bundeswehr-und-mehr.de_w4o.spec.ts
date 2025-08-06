import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundeswehr-und-mehr.de_w4o', ['https://www.bundeswehr-und-mehr.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
