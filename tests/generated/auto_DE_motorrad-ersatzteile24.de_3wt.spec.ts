import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_motorrad-ersatzteile24.de_3wt', ['https://www.motorrad-ersatzteile24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
