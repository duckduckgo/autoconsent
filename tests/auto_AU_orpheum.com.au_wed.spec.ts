import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_orpheum.com.au_wed', ['https://www.orpheum.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
