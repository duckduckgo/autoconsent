import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wandernundmehr.at_14l', ['https://wandernundmehr.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
