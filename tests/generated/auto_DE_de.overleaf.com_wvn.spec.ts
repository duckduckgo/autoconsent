import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.overleaf.com_wvn', ['https://de.overleaf.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
