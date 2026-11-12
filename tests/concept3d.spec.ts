import generateCMPTests from '../playwright/runner';

generateCMPTests('concept3d', [
    'https://campusmap.swarthmore.edu/',
    'https://map.mtholyoke.edu/',
    'https://maps.usc.edu/',
    'https://map.fit.edu/',
]);
