import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ikmultimedia.com_7ds', ['https://www.ikmultimedia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
