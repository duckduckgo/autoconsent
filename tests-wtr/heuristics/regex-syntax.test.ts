import { expect } from '@esm-bundle/chai';
import {
    ACCEPT_PATTERNS,
    ACKNOWLEDGE_PATTERNS,
    BUTTON_NEVER_MATCH_PATTERNS,
    DETECT_CONTEXT_NEGATIVES,
    DETECT_PATTERNS,
    REJECT_PATTERNS,
    SETTINGS_PATTERNS,
} from '../../lib/heuristic-classify';
import { patternOf } from '../../lib/heuristic-patterns';
import { alternatives, classEnd, groupEnd } from '../../scripts/required-literals';

const nonAsciiLetter = (c: string | undefined) => c !== undefined && c.charCodeAt(0) > 127 && /\p{L}/u.test(c);

/** The top-level alternatives of the group that opens at src[open], and where it closes. */
function groupAlternatives(src: string, open: number): { alts: string[]; close: number } {
    const close = groupEnd(src, open);
    const from = src.startsWith('(?:', open) ? open + 3 : open + 1;
    return { alts: alternatives(src.slice(from, close)), close };
}

/**
 * Places where a regex without the u flag has \b next to a non-ASCII letter, which it treats as a non-word character,
 * so the boundary never matches between that letter and a space.
 */
function accentBoundaries(re: RegExp): string[] {
    if (re.flags.includes('u')) {
        return [];
    }
    const src = re.source;
    const found: string[] = [];
    const groupOpens = new Map<number, number>();
    for (let i = 0; i < src.length; i++) {
        if (src[i] === '\\') {
            i++;
        } else if (src[i] === '[') {
            i = classEnd(src, i);
        } else if (src[i] === '(') {
            groupOpens.set(groupEnd(src, i), i);
        }
    }
    for (let i = 0; i < src.length - 1; i++) {
        if (src[i] !== '\\') {
            continue;
        }
        if (src[i + 1] === 'b') {
            const next = src[i + 2];
            const after = next === '(' ? groupAlternatives(src, i + 2).alts.map((a) => a[0]) : [next];
            const open = groupOpens.get(i - 1);
            const before = open !== undefined ? groupAlternatives(src, open).alts.map((a) => a[a.length - 1]) : [src[i - 1]];
            if ([...after, ...before].some(nonAsciiLetter)) {
                found.push(src.slice(Math.max(0, i - 15), i + 17));
            }
        }
        i++;
    }
    return found;
}

describe('heuristic regex syntax', () => {
    const regexes: RegExp[] = [
        ...DETECT_PATTERNS.map(patternOf),
        ...DETECT_CONTEXT_NEGATIVES.flatMap((n) => [n.pattern, n.unless].filter((r): r is RegExp => r instanceof RegExp)),
        ...[REJECT_PATTERNS, SETTINGS_PATTERNS, ACCEPT_PATTERNS, ACKNOWLEDGE_PATTERNS, BUTTON_NEVER_MATCH_PATTERNS]
            .flat()
            .filter((p): p is RegExp => p instanceof RegExp),
    ];

    it('finds the boundaries it checks for', () => {
        expect(accentBoundaries(/\b(?:x|âge)\b/i)).to.have.length(1);
        expect(accentBoundaries(/età\b/i)).to.have.length(1);
        expect(accentBoundaries(/\bage\b/i)).to.have.length(0);
        expect(accentBoundaries(/\bâge\b/iu)).to.have.length(0);
    });

    it('has no \\b next to an accented letter', () => {
        const bad = regexes.flatMap((re) => accentBoundaries(re).map((at) => `${String(re).slice(0, 60)}: …${at}…`));
        expect(bad).to.deep.equal([]);
    });
});
