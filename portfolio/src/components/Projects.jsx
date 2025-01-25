import ui from '/ui.png'
import dev from '/dev.png'
import reponsive from '/responsive.png'

import { useInView } from 'framer-motion';
import React,{useState,useEffect} from 'react';

import {ProjectDiv} from './ProjectDiv'


export function Projects(){
    
    const [repos, setRepos] = useState([]); // Initialize state as an array
    const repositories = [
        { owner: "softwareNinja-888", name: "salt_light" ,vercel:'https://salt-light-9h3y.vercel.app/'},
        { owner: "softwareNinja-888", name: "FlixHub" ,vercel:'https://flix-hub-lac.vercel.app/'},
        { owner: "softwareNinja-888", name: "one-health" ,vercel:'https://one-health-three.vercel.app/'},
        { owner: "softwareNinja-888", name: "cv" ,vercel:'https://cv-omega-three.vercel.app/'},

    ];

    useEffect(() => {
      const fetchRepos = async () => {
        try {
          const promises = repositories.map(async repo => {
            const response = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            const data = await response.json();
            return { ...data, vercelLink: `${repo.vercel}` }; // Add Vercel link
          });
          const data = await Promise.all(promises);
          setRepos(data);
        } catch (error) {
          console.error("Error fetching repositories:", error);
        }
      };
  
      fetchRepos();
    }, []);

    console.log(repos); // Logs the fetched repository data

    return (
        <>

            <div>
                <div className="text-fontColor text-3xl text-center font-poppins mt-20 underline">My Projects</div>
                <div className="grid grid-cols-1 justify-items-center w-screen">
                    {repos.map(repo=>{
                      return <ProjectDiv key={repo.id} name={repo.name} link={repo.vercelLink} linkGit={repo.html_url + '/blob/main/README.md'}/>
                    })}
                </div>
              
            </div>
    
        </>    
    )
}