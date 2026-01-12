import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lordgun.com.au_zka', ['https://www.lordgun.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
