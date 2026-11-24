import generateCMPTests from '../playwright/runner';

// the close link navigates away, so the self-test cannot run on the original page
generateCMPTests('fellow.pl', ['https://fellow.pl/', 'https://fll.pl/'], { mobile: false, testSelfTest: false });
generateCMPTests('fellow.pl', ['https://m.fellow.pl/', 'https://m.fll.pl/'], { mobile: true, testSelfTest: false });
