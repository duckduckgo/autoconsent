import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rog-forum.asus.com_qsr', ['https://rog-forum.asus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
