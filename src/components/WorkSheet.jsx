import { useState, useEffect } from 'react';
import IntroHeader from "./IntroHeader";
import { January, February, March, April, May, June, July } from '../common/Helper';
import { gitHub, vercel } from '../assets/images/webp/images';

const generateColor = () => `hsl(${Math.random() * 360}, 70%, 60%)`;

const WorkSheet = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July"];
    const currentMonthName = monthNames[new Date().getMonth()];
    const [colors, setColors] = useState(Array(4).fill().map(generateColor));

    const [selectedMonth, setSelectedMonth] = useState(currentMonthName);
    const monthData = { January, February, March, April, May, June, July };

    const HANDLE_MONTH_SELECT = (month) => {
        setSelectedMonth(month);
    };

    useEffect(() => {
        setSelectedMonth(currentMonthName);
    }, [currentMonthName]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColors(prevColors => prevColors.map((_, index) =>
                index === Math.floor(Math.random() * 4) ? generateColor() : prevColors[index]
            ));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const RENDER_PROJECTS = () => {
        const projects = monthData[selectedMonth];
        if (!projects || projects.length === 0) {
            return <p className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl leading-[44px] text-white font-eduAus'>No projects have been built yet!</p>;
        }
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border p-4 rounded-lg flex flex-col items-center justify-start shadow-[0px_0px_10px_5px_rgba(0,0,0,0.15)] hover:shadow-2xl ease-in-out duration-300">
                        <h3 className="font-bold font-poppins text-3xl text-center">{project.project_name}</h3>
                        <div className='flex items-center justify-center gap-4'>
                            <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xl font-gupter py-3 flex items-center justify-center">
                                <img src={gitHub} alt="github logo" className=' size-5' />
                            </a>
                            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-green-500 text-xl font-gupter py-3 flex items-center justify-center">
                                <img src={vercel} alt="vercel logo" className='size-5' />
                            </a>
                        </div>
                        <a href={project.live_link} target='_blank' className='w-full max-w-[370px] overflow-hidden rounded-lg'>
                            <img src={project.project_img} alt="project images" className='h-[207px] w-full hover:scale-105 ease-in-out duration-500' />
                        </a>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="animate-gradient transition-colors" style={{
            backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
            backgroundSize: '400% 100%',
            transition: 'background-image 1s ease-in-out',
        }}>
            <div className='min-h-screen'>
                <IntroHeader onMonthSelect={HANDLE_MONTH_SELECT} />
                <div className="container mx-auto mt-10">
                    {RENDER_PROJECTS()}
                </div>
            </div>
        </div>
    );
};

export default WorkSheet;
