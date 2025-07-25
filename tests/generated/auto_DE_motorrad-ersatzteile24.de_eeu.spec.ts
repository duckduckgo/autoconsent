import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_motorrad-ersatzteile24.de_eeu', ['https://www.motorrad-ersatzteile24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
