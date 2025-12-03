import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_motorrad-ersatzteile24.de_cd8', ['https://www.motorrad-ersatzteile24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
