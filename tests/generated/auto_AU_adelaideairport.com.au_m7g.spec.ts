import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_adelaideairport.com.au_m7g', ['https://adelaideairport.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
