import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_freesvgconverter.com_tk7', ['https://freesvgconverter.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
