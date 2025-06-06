export interface Project {
  name: string,
  image_path: string,
  image_alt: string,
  category: string,
  description: string,
  background: string,
  features: string
  technologies: string
  source: string,
  live: string,
  created: string
}

export interface SlimProject {
  name: string,
  image_path: string,
  image_alt: string,
  description: string
}
