import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ehrafworldcultures.yale.edu_fu7', ['https://ehrafworldcultures.yale.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
