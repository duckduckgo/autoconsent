import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cima.aemps.es_jbk', ['https://cima.aemps.es/cima/publico/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
