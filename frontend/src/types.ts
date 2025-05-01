export interface Project {
  name: string,
  image_path: string,
  image_alt: string,
  description: string,
  background: string,
  features: string
  technologies: string
  source: string,
  live: string
  created: string
}

export interface SlimProject {
  name: string,
  image_path: string,
  image_alt: string,
  description: string,
}

export interface Post {
  name: string,
  category: string,
  content: string,
  created: string
}

export interface SlimPost {
  name: string,
  category: string,
  created: string
}

export interface InputFields {
  fullname: string;
  email: string;
  message: string;
}
