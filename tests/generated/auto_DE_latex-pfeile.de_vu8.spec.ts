import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_latex-pfeile.de_vu8', ['http://www.latex-pfeile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
