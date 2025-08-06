import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ikmultimedia.com_c4p', ['https://www.ikmultimedia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
