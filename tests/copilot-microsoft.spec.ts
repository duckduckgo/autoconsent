import generateCMPTests from '../playwright/runner';

generateCMPTests('copilot-microsoft', ['https://copilot.microsoft.com/'], {
    onlyRegions: ['UK', 'DE'],
});
