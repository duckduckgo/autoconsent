import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_students.flinders.edu.au_79d', ["https://students.flinders.edu.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
