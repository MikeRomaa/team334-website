import { NextPage } from 'next';
import Image from 'next/image';
import { Bubble } from '../components/Bubble';
import { Ultor } from '../components/Ultor';
import logo2022 from '../public/media/logo2022.png';

const Home: NextPage = () => (
    <div className="text-[20px] py-30 px-60">
        <Bubble
            x={500} y={300}
            vx={1} vy={-1}
            r={370}
            color="rgba(82, 0, 255, 0.075)"
            className="fixed inset-0 pointer-events-none"
        />
        <Bubble
            x={700} y={900}
            vx={-1} vy={1}
            r={400}
            color="rgba(0, 117, 255, 0.075)"
            className="fixed inset-0 pointer-events-none"
        />

        <div className="flex items-center h-screen w-[40%]">
            <div>
                <h2 className="text-4xl font-normal">We Are</h2>
                <h1 className="text-5xl font-display mb-16">TechKnights</h1>
                <p className="mb-5">TechKnights is a FIRST&reg; Robotics Competition team from <a href="https://bths.edu" target="_blank" rel="noreferrer">Brooklyn Technical High School</a> in New York City.</p>
                <p className="mb-16">Also known as Team 334, our team has a rich history in engineering excellence and putting the power to create in the hands of high school students.</p>
                <button className="border-2 border-white rounded-xl bg-none font-bold text-md px-8 py-1">
                    Learn More
                </button>
            </div>
        </div>

        <div className="flex items-center h-screen w-[40%]">
            <div>
                <div className="inline-flex items-center mb-12">
                    <h1 className="text-5xl font-display -mb-4 mr-5">Ultor</h1>
                    <Image src={logo2022} alt="Ultor" height={88} width={97} />
                </div>
                <p className="mb-16">Built for the 2022 season, Ultor features a six-falcon tank drivetrain, turret shooter for hub tracking, and the most stunning design to have ever left our workshop.</p>
                <button className="border-2 border-white rounded-xl bg-none font-bold text-md px-8 py-1">
                    Learn More
                </button>
            </div>
        </div>

        <Ultor className="fixed right-60 top-60 w-[40%]" />
    </div>
);

export default Home;
