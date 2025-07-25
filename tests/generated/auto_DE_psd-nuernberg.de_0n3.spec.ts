import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_psd-nuernberg.de_0n3', ['https://www.psd-nuernberg.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
