# shared-assets

Shared static assets (images, fonts, etc.) used across multiple applications (web, mobile).

## Structure

```
src/lib/images/
  ├── ice/      - Ice cream product images
  ├── food/     - Food product images
  ├── drinks/   - Drink product images
  └── dessert/  - Dessert product images
```

## Usage

In application `project.json`, add to build options:

```json
{
  "assets": [
    {
      "glob": "**/*",
      "input": "shared/assets/src/lib",
      "output": "assets"
    }
  ]
}
```

This will copy all assets to the build output `assets/` folder.
