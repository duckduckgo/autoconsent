import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rhein-neckar-kreis.de_5fg', ['https://www.rhein-neckar-kreis.de/1759703.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
