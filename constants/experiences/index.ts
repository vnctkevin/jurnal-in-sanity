import OrganizationsExperience from "./organizations";
import ProjectsExperience from "./projects";
import { ExperiencesType } from "./types";
import WorkExperience from "./works";

export const EXPERIENCES: ExperiencesType = {
    Work: WorkExperience,
    Projects: ProjectsExperience,
    Organizations: OrganizationsExperience,
}