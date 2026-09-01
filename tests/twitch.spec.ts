import generateCMPTests from '../playwright/runner';

generateCMPTests('twitch.tv', ['https://www.twitch.tv/', 'https://m.twitch.tv/'], {
    skipRegions: ['US'],
});
