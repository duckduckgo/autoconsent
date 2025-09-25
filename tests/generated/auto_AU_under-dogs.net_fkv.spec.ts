import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_under-dogs.net_fkv', ['https://www.under-dogs.net/pages/jr-through-my-window'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
