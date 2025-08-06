import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_psd-berlin-brandenburg.de_006', ['https://www.psd-berlin-brandenburg.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
