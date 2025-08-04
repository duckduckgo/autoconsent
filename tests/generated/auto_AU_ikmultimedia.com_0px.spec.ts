import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ikmultimedia.com_0px', ['https://www.ikmultimedia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
