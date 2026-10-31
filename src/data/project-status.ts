export type ProjectStatus = 'PASS_BUILD' | 'PASS_HW' | 'IN_TEST' | 'PLANNED';
export const statusLabel: Record<ProjectStatus, string> = {
  PASS_BUILD: 'Build validated', PASS_HW: 'Hardware validated', IN_TEST: 'In test', PLANNED: 'Planned'
};
export const projects = [
  { slug: 't425-sim', name: 'T425-SIM', status: 'IN_TEST' as ProjectStatus, summary: 'Experimental work around a documented T425 execution path.' },
  { slug: 't425-visual-debugger', name: 'T425 Visual Debugger', status: 'IN_TEST' as ProjectStatus, summary: 'F93: V0.1 trace replay implemented; 9 tests passed on container and macOS; public installers pending.' },
  { slug: 'linkusb', name: 'LINKUSB', status: 'PASS_HW' as ProjectStatus, summary: 'A two-link RP2040 physical-link bring-up, measured in small steps.' },
  { slug: 'ttg3', name: 'TTG3', status: 'PLANNED' as ProjectStatus, summary: 'A future bridge for repeatable transputer experiments.' },
  { slug: 'rspy', name: 'RSPY', status: 'PLANNED' as ProjectStatus, summary: 'A future inspection and tooling project.' }
];
