import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bankwaw.com.au_2st', ['https://www.bankwaw.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
