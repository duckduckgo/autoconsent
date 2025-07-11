import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_everquest.allakhazam.com_2mx', ['https://everquest.allakhazam.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
