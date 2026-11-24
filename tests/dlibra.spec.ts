import generateCMPTests from '../playwright/runner';

generateCMPTests('dlibra', [
    'https://kpbc.umk.pl/dlibra',
    'https://zbc.uz.zgora.pl/dlibra',
    'https://www.dbc.wroc.pl/dlibra',
    'https://pbc.biaman.pl/dlibra',
]);
