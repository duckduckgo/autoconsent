import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_infektionsschutz.de_qwl', ['https://www.infektionsschutz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
