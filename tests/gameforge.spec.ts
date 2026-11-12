import generateCMPTests from '../playwright/runner';

generateCMPTests('gameforge', [
    'https://gameforge.com/',
    'https://lobby.ogame.gameforge.com/',
    'https://lobby.ikariam.gameforge.com/',
    'https://playcubio.com/',
]);
