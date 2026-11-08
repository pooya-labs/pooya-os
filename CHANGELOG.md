# Changelog

## 2026-11-08

### Updated
- Added official logo assets for all nine projects in the Projects workspace.
- Reused the same asset sources and logo treatment as the Lumina Glass ecosystem showcase.
- Displayed each project mark in both the project selector and the selected-project header.
- Preserved intrinsic proportions with contained image rendering and project-appropriate transparent, black, or light logo surfaces.
- Added Persian documentation and updated the project identity, logo asset, runtime-boundary, and local verification sections in the README.

### Verification
- Reviewed the logo source paths against the Lumina Glass project ecosystem configuration.
- Confirmed all nine project entries define a logo source in src/components/apps/ProjectsApp.tsx.
- Fixed a duplicate logo property caught by the first TypeScript build; the corrected source now defines exactly nine project logo entries.
- Final TypeScript/build and browser-level visual verification are pending the latest GitHub Actions run.
