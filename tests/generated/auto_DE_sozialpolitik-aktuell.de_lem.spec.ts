import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sozialpolitik-aktuell.de_lem', ['https://www.sozialpolitik-aktuell.de/sozialpolitik_aktuell_startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
