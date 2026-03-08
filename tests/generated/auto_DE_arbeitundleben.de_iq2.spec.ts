import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_arbeitundleben.de_iq2', ['https://arbeitundleben.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
