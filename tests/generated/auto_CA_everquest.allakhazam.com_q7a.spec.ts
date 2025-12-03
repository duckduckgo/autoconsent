import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_everquest.allakhazam.com_q7a', ['https://everquest.allakhazam.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
