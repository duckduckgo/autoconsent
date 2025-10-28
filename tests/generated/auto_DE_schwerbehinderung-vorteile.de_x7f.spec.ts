import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwerbehinderung-vorteile.de_x7f', ['https://schwerbehinderung-vorteile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
