# Metadata Files

This directory contains metadata files used by the build script to generate HTML pages from templates.

## How it Works

The build script (`src/build.js`) automatically loads and merges metadata files:

1. **Default metadata**: Always loaded as a base (`metadata.js`)
2. **Template-specific metadata**: Merged on top of default (`metadata-<template-name>.js`)
3. **Partial metadata**: Automatically merged if the template uses that partial

### Naming Convention

- **Default metadata**: `metadata.js` - Base metadata for all templates
- **Template-specific metadata**: `metadata-<template-name>.js` - Specific to one template
- **Partial metadata**: `metadata-<partial-name>.js` - Automatically included when partial is used

### Examples

| Template File | Uses Partial | Metadata Files Merged | Order |
|--------------|-------------|----------------------|-------|
| `index.html` | None | `metadata.js` only | Default |
| `s4l.html` | `{{> publications}}` | `metadata.js` → `metadata-s4l.js` → `metadata-publications.js` | Left to right |
| `about.html` | `{{> publications}}` | `metadata.js` → `metadata-publications.js` | Left to right |

### Metadata Merging

When multiple metadata files are loaded, they are merged in this order (later files override earlier ones):

1. **Default metadata** (`metadata.js`)
2. **Template-specific metadata** (`metadata-<template>.js`)
3. **Partial metadata** (`metadata-<partial>.js`) - for each partial used

## Creating Metadata Files

### For Templates

To create metadata for a specific template:

1. Create a new file: `metadata-<template-name>.js`
   - For `index.html` → create `metadata-index.js`
   - For `projects.html` → create `metadata-projects.js`

2. Export an object with your data:
   ```javascript
   module.exports = {
     name: 'Your Name',
     title: 'Your Title',
     // ... add your specific data
   };
   ```

3. The build script will automatically detect and use it

### For Partials

To create metadata for a reusable partial:

1. Create the partial file: `templates/<partial-name>.html`
2. Register it in `build.js` partialsConfig array
3. Create metadata file: `metadata-<partial-name>.js`
   ```javascript
   module.exports = {
     // Data used by this partial
     publications: [...],
   };
   ```

4. Any template that includes `{{> partial-name}}` will automatically get this metadata merged in

## Benefits

- **Separation of concerns**: Each template has its own data
- **Maintainability**: Easy to update data for specific pages
- **Flexibility**: Templates can share common data or have unique fields
- **Fallback**: If no specific metadata exists, uses the default

## Migration

If you want to keep using the same metadata for all templates, simply don't create template-specific files. The system will continue to use `metadata.js` as before.
