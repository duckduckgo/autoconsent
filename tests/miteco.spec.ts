import generateCMPTests from '../playwright/runner';

generateCMPTests('miteco', [
    'https://www.miteco.gob.es/',
    'https://www.lariocc.es/',
    'https://www.cadc-albufeira.eu/',
    'https://www.imaginatrabajaraqui.gob.es/',
]);
