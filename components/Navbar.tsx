import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/media/logo.png';

export const Navbar: React.FC = () => (
    <div className="fixed w-full top-0 backdrop-blur-lg border-b-2 border-b-slate-500/10 py-4 px-60 z-50">
        <div className="flex items-center gap-24">
            <Link href="/" passHref>
                <a>
                    <Image src={logo} alt="TechKnights | Team 334" height={71} width={115} />
                </a>
            </Link>
            <Link href="/team" passHref>
                <a className="text-lg !no-underline ml-auto">Team</a>
            </Link>
            <Link href="/robots" passHref>
                <a className="text-lg !no-underline">Robots</a>
            </Link>
            <Link href="/sponsors" passHref>
                <a className="text-lg !no-underline">Sponsors</a>
            </Link>
            <Link href="/blog" passHref>
                <a className="text-lg !no-underline">Blog</a>
            </Link>
        </div>
    </div>
);
