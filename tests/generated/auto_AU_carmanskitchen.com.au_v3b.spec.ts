import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_carmanskitchen.com.au_v3b', ['https://carmanskitchen.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
