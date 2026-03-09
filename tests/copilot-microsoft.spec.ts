import generateCMPTests from '../playwright/runner';

generateCMPTests('copilot-microsoft', ['https://copilot.microsoft.com/'], {
    skipRegions: ['US'],
});
