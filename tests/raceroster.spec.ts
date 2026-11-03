import generateCMPTests from '../playwright/runner';

// on mobile the banner container sits below the viewport and only its inner box slides in, so the heuristic misses it
generateCMPTests('raceroster', ['https://raceroster.com/'], { mobile: true });
generateCMPTests('raceroster', ['https://raceroster.com/'], { mobile: false });
