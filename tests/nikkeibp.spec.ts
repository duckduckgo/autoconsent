import generateCMPTests from '../playwright/runner';

generateCMPTests('nikkeibp', [
    'https://natgeo.nikkeibp.co.jp/',
    'https://xtech.nikkei.com/',
    'https://business.nikkei.com/',
    'https://bio.nikkeibp.co.jp/',
]);
