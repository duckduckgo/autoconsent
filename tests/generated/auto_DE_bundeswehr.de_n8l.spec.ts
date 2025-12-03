import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundeswehr.de_n8l', ['https://www.bundeswehr.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
