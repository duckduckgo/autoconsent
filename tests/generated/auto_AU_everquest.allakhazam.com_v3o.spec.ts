import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_everquest.allakhazam.com_v3o', ['https://everquest.allakhazam.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
