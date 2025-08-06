import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gesundheit.gv.at_rg4', ['https://www.gesundheit.gv.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
