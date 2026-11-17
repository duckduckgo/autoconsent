import generateCMPTests from '../playwright/runner';

generateCMPTests('axeptio-tcf', ['https://frenchbreaches.com/', 'https://www.beauteprivee.fr/', 'https://www.acteurspublics.fr/']);

// No "Non merci" button: "Continuer sans accepter" link instead
generateCMPTests('axeptio-tcf', ['https://www.cinoche.com/', 'https://www.educatout.com/']);
