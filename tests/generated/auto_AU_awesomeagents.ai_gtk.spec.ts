import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_awesomeagents.ai_gtk', ['https://awesomeagents.ai/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
