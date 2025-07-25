import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_www2.hm.com_oph', ['https://www2.hm.com/de_de/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
