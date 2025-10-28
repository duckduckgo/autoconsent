import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_harveynormanphotos.com.au_lup', ['https://harveynormanphotos.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
