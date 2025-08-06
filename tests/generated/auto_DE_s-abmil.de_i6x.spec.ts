import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_s-abmil.de_i6x', ['https://www.s-abmil.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
