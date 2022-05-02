import generateCMPTests from "./runner";

generateCMPTests('destatis.de', [
    'https://destatis.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
