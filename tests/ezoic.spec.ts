import generateCMPTests from '../playwright/runner';

generateCMPTests('EZoic', ['https://wordleplay.com/', 'https://pytutorial.com/', 'https://www.metric-conversions.org/'], {
    skipRegions: ['US'],
});
