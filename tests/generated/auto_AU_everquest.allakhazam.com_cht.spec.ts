import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_everquest.allakhazam.com_cht', ['https://everquest.allakhazam.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
