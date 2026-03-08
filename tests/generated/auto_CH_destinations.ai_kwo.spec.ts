import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_destinations.ai_kwo', ['https://destinations.ai/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
