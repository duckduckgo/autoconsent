import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de1.elvenar.com_usz', ['https://de-play.elvenar.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
