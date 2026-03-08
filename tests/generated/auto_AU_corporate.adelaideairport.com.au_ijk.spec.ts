import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_corporate.adelaideairport.com.au_ijk', ['https://corporate.adelaideairport.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
