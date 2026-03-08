import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aplusurbandesign.com_ffp', ['https://aplusurbandesign.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
