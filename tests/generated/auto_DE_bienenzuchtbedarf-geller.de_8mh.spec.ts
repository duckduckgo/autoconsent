import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bienenzuchtbedarf-geller.de_8mh', ['https://bienenzuchtbedarf-geller.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
