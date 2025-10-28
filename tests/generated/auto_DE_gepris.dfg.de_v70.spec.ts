import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gepris.dfg.de_v70', ['https://gepris.dfg.de/gepris/OCTOPUS'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
