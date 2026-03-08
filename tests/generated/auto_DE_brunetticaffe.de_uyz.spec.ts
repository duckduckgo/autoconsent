import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brunetticaffe.de_uyz', ['https://brunetticaffe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
