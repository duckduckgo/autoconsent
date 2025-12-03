import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ikmultimedia.com_9ha', ['https://www.ikmultimedia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
