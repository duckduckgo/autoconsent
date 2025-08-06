import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_discovertasmania.com.au_56p', ['https://www.discovertasmania.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
