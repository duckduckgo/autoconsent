import generateCMPTests from '../playwright/runner';

generateCMPTests('ezoic-gpp', ['https://fixanswer.com/', 'https://pytutorial.com/', 'https://www.metric-conversions.org/'], {
    onlyRegions: ['US'],
});
