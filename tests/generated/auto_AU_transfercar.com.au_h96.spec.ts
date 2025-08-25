import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_transfercar.com.au_h96', ['https://www.transfercar.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
