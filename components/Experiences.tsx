import * as React from 'react'
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { EXPERIENCES } from "constants/experiences"
import { ExperiencesType, SingularExperienceType } from "constants/experiences/types"
import Head from 'next/head'
import Image from 'next/image'




export default function Experiences() {
  //get all experiences
  const allExperiences = EXPERIENCES
  const experienceKeys: (keyof ExperiencesType)[] = Object.keys(
    EXPERIENCES
  ) as (keyof ExperiencesType)[];

  const [experienceTabs, setExperienceTabs] = useState<number>(0);

  //render singular experience
  const selectedExperience: SingularExperienceType[] =
      EXPERIENCES[experienceKeys[experienceTabs]];

  const renderExperiences = (experiences: SingularExperienceType[]) => {
      return experiences.map((experience: SingularExperienceType) => {
        return (
            <React.Fragment key={experience.name}>
                <div className="flex flex-col gap-2 rounded overflow-hidden shadow-lg p-8">
                  <h3 className="text-xl font-bold">{experience.name}</h3>
                    {experience.history[0].job_desc?.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                    <div className='button'>
                    <a href={experience.link} target="_blank" rel="noreferrer">
                        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">View Project</button>
                        </a>
                    </div>
                </div>
                </React.Fragment>
        )
      })
  }

  return (
    <section className="w-full py-8 md:py-16">
        <div className="container grid items-center gap-4 pb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experiences and Portfolios</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I've worked on a wide range of interesting projects, take a look at some of my work.
            </p>
        </div>
        <div className="grid w-full grid-col-1 items-start gap-10 md:grid-cols-3 lg:gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Work</h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of my professional work experiences.
                </p>
              </div>  
                {renderExperiences(allExperiences.Work)}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Projects</h3>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of personal and academic projects I've worked on.
              </p>
            </div>  
                {renderExperiences(allExperiences.Projects)}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Organizations</h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of organizations I've worked with.
                </p>
              </div>
                {renderExperiences(allExperiences.Organizations)}
            </div>
        </div>
    </section>
  )
} 

