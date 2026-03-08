import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_archive.tmstor.es_oaq', ['https://archive.tmstor.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
