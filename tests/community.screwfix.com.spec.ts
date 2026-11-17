import generateCMPTests from '../playwright/runner';

generateCMPTests('community.screwfix.com', ['https://community.screwfix.com/threads/boiler-return-temperature.232684/'], {
    skipRegions: ['US'],
});
