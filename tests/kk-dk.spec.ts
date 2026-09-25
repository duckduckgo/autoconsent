import generateCMPTests from '../playwright/runner';

generateCMPTests('kk.dk', [
    'https://www.kk.dk/borger/parkering-trafik-og-veje/parkering/her-maa-du-parkere-med-din-beboerlicens',
    'https://www.kk.dk/',
    'https://international.kk.dk/',
]);
