import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zwp-online.info_j0b', ['https://www.zwp-online.info/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
