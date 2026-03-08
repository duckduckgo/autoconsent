import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klassik-heute.de_w9d', ['http://www.klassik-heute.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
