import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kayak.com_u00', ['https://www.kayak.ch/?ispredir=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
