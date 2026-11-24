import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'plex.tv',
    [
        'https://watch.plex.tv/',
        'https://support.plex.tv/',
        'https://www.plex.tv/en-gb/plans/',
        'https://www.plex.tv/media-server-downloads/?cat=computer&plat=macos',
    ],
    {
        skipRegions: ['US', 'CA', 'AU', 'JP'],
    },
);
