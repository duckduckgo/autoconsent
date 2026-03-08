import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_abo.swp.de_brn', ['https://abo.swp.de/suedwestpresse'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
