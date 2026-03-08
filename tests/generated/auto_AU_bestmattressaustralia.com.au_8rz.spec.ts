import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bestmattressaustralia.com.au_8rz', ['https://bestmattressaustralia.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
