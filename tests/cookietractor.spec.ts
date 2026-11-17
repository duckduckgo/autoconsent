import generateCMPTests from '../playwright/runner';

generateCMPTests('cookietractor', [
    'https://www.matteboken.se/',
    'https://www.pluggakuten.se/',
    'https://www.folkuniversitetet.se/',
    'https://www.lansfast.se/',
    'https://www.rodakorset.se/',
    'https://www.visitstockholm.se/',
    'https://www.regeringen.se/',
    'https://www.liseberg.se/',
]);
