import { ProjectWidths } from '~/constants/pages/gallery'

export interface Project {
  color: string;
  image: string;
  title: string;
  description: string;
  width: ProjectWidths;
}
