import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_oberstdorf.de_7dc', ['https://www.oberstdorf.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
