import generateCMPTests from '../playwright/runner';

generateCMPTests('cuvva.com', ['https://www.cuvva.com/'], { mobile: true });
generateCMPTests('cuvva.com', ['https://www.cuvva.com/'], { mobile: false });
