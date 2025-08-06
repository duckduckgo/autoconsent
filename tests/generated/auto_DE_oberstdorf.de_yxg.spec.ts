import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_oberstdorf.de_yxg', ['https://www.oberstdorf.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
