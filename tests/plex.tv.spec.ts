import generateCMPTests from '../playwright/runner';

generateCMPTests('plex.tv', ['https://watch.plex.tv/', 'https://support.plex.tv/', 'https://www.plex.tv/en-gb/plans/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
