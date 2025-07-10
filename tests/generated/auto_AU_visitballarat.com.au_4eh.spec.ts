import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_visitballarat.com.au_4eh', ['https://www.visitballarat.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
