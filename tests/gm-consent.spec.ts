import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'gm-consent',
    ['https://topgames.gg/', 'https://street-view.io/', 'https://2048classic.io/', 'https://cargames.co/', 'https://slope-3d.io/'],
    {
        skipRegions: ['US'],
    },
);
