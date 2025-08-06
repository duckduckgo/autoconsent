import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundeswehr.de_7dm', ['https://www.bundeswehr.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
