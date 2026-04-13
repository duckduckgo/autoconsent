import generateCMPTests from '../playwright/runner';

generateCMPTests('elsevier-pure', [
    'https://discover.utas.edu.au/',
    'https://experts.deakin.edu.au/',
    'https://experts.griffith.edu.au/',
    'https://profiles.uts.edu.au/',
    'https://scholars.latrobe.edu.au/',
    'https://profiles.ucl.ac.uk/',
    'https://discover.research.utoronto.ca/',
]);
