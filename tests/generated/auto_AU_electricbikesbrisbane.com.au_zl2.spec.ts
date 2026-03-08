import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_electricbikesbrisbane.com.au_zl2', ['https://electricbikesbrisbane.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
