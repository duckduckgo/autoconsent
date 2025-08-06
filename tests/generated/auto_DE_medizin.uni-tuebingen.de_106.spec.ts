import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medizin.uni-tuebingen.de_106', ['https://www.medizin.uni-tuebingen.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
