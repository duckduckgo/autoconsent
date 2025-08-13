import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_psd-nuernberg.de_3hg', ['https://www.psd-nuernberg.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
