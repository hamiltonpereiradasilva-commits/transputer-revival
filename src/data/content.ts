export const nav = [
  ['Learn','learn'], ['Labs','labs'], ['Projects','projects'], ['Architecture','architecture'],
  ['History','history'], ['Documentation','documentation'], ['Community','community'], ['Support','support'], ['About','about']
] as const;
export const locales = { en: 'English', pt: 'Português', de: 'Deutsch', fr: 'Français' } as const;
export const lessons = [
  { title: 'A first map of a Transputer', text: 'Start with processes, links and the small machine that made concurrency feel tangible.' },
  { title: 'Channels and CSP', text: 'Follow the idea of communication through channels before looking at implementation details.' },
  { title: 'From architecture to experiment', text: 'Move from primary documentation to a measured, reproducible modern test.' }
];
