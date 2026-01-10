import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_adelaideairport.com.au_upg', ['https://adelaideairport.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
