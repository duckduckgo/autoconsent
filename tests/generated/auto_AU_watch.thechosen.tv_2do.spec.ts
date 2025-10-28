import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_watch.thechosen.tv_2do', ['https://watch.thechosen.tv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
