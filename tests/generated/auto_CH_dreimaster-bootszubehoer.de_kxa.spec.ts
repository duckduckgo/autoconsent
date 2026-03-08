import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dreimaster-bootszubehoer.de_kxa', ['https://dreimaster-bootszubehoer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
