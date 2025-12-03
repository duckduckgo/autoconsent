import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_visitballarat.com.au_891', ['https://www.visitballarat.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
