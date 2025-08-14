import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_s-abmil.de_r0t', ['https://www.s-abmil.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
