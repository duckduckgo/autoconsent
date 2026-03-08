import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_coinfomania.com_634', ['https://coinfomania.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
