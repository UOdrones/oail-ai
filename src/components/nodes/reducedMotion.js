export const isReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export function setupReducedMotionListener(callback) {
    if (typeof window === 'undefined') return () => { };

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handler = (e) => {
        callback(e.matches);
    };

    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
}
