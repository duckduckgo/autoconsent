import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zwp-online.info_tpd', ['https://www.zwp-online.info/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
