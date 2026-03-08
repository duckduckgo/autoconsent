import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_arztsoftware.medatixx.de_sax', ['https://arztsoftware.medatixx.de/start'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
