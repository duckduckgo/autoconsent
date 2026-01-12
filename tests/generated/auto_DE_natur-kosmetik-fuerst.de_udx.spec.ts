import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_natur-kosmetik-fuerst.de_udx', ['https://www.natur-kosmetik-fuerst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
