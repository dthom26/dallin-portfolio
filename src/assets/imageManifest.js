// Image manifest — auto-imports every project image at build time via Vite's import.meta.glob.
// To add images: drop files into src/assets/images/projects/{project-slug}/
// Reference them in projectData.js as: img['project-slug/filename.png']

const modules = import.meta.glob(
  "./images/projects/**/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);

const imageManifest = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.replace("./images/projects/", ""),
    mod.default,
  ])
);

export default imageManifest;
