import generateCMPTests from '../playwright/runner';

generateCMPTests('weathertech.com', ['https://www.weathertech.com/'], {
    skipRegions: ['US'],
});
