import generateCMPTests from '../playwright/runner';

generateCMPTests('jcookie', ['https://javhd.com/en/']);

// sister sites only show the banner outside the US
generateCMPTests('jcookie', ['https://av69.tv/en', 'https://avtits.com/en', 'https://heymilf.com/en'], {
    skipRegions: ['US'],
});
