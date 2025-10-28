import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_teletext.zdf.de_jnb', ['https://teletext.zdf.de/teletext/zdf/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
