import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beliebte-vornamen.de_y42', ['https://www.beliebte-vornamen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
