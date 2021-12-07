import { ProjectSize } from '~/constants/pages/gallery'

export interface Project {
  color: string;
  image: string;
  title: string;
  description: string;
  size: ProjectSize;
}
