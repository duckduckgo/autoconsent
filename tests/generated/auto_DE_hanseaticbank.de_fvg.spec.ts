import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hanseaticbank.de_fvg', ['https://www.hanseaticbank.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
