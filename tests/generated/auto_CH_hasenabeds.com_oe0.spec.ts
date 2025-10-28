import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hasenabeds.com_oe0', ['https://www.hasenabeds.com/de-ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
