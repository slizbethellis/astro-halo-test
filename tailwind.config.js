/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            h1: {
              'font-weight': 700,
            },
            a: {
              'text-decoration-line': 'none',
              '&:hover': {
                'text-decoration-line': 'underline',
              },
            },
          }
        },
        phthalo: {
          css: {
            '--tw-prose-body': 'var(--color-phthalo-900)',
            '--tw-prose-headings': 'var(--color-phthalo-950)',
            '--tw-prose-lead': 'var(--color-phthalo-800)',
            '--tw-prose-links': 'var(--color-lila-800)',
            '--tw-prose-bold': 'var(--color-phthalo-950)',
            '--tw-prose-counters': 'var(--color-phthalo-700)',
            '--tw-prose-bullets': 'var(--color-phthalo-600)',
            '--tw-prose-hr': 'var(--color-phthalo-400)',
            '--tw-prose-quotes': 'var(--color-phthalo-950)',
            '--tw-prose-quote-borders': 'var(--color-phthalo-400)',
            '--tw-prose-captions': 'var(--color-phthalo-800)',
            '--tw-prose-code': 'var(--color-phthalo-950)',
            '--tw-prose-th-borders': 'var(--color-phthalo-400)',
            '--tw-prose-td-borders': 'var(--color-phthalo-300)',
            '--tw-prose-invert-body': 'var(--color-phthalo-100)',
            '--tw-prose-invert-headings': 'var(--color-phthalo-50)',
            '--tw-prose-invert-lead': 'var(--color-phthalo-200)',
            '--tw-prose-invert-links': 'var(--color-phthalo-300)',
            '--tw-prose-invert-bold': 'var(--color-phthalo-50)',
            '--tw-prose-invert-counters': 'var(--color-phthalo-300)',
            '--tw-prose-invert-bullets': 'var(--color-phthalo-400)',
            '--tw-prose-invert-hr': 'var(--color-phthalo-700)',
            '--tw-prose-invert-quotes': 'var(--color-phthalo-50)',
            '--tw-prose-invert-quote-borders': 'var(--color-phthalo-700)',
            '--tw-prose-invert-captions': 'var(--color-phthalo-300)',
            '--tw-prose-invert-code': 'var(--color-phthalo-50)',
            '--tw-prose-invert-th-borders': 'var(--color-phthalo-600)',
            '--tw-prose-invert-td-borders': 'var(--color-phthalo-700)',
          }
        }
      }),
    },
  },
}