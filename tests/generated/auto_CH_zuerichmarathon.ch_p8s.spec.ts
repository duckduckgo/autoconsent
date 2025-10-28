import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zuerichmarathon.ch_p8s', ['https://www.zuerichmarathon.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
