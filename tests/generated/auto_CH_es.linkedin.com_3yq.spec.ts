import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_es.linkedin.com_3yq', ['https://es.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
