import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medizin.uni-tuebingen.de_lfc', ['https://www.medizin.uni-tuebingen.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
