import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_motoheaven.com.au_13j', ['https://motoheaven.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
