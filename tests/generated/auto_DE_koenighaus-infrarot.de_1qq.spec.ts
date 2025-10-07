import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_koenighaus-infrarot.de_1qq', ['https://www.koenighaus-infrarot.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
