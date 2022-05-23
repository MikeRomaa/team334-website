import React from 'react';
import Image from 'next/image';

export type Member = {
    name: string;
    department: string;
    image: string;
}

interface MemberProps {
    member: Member;
}

export const MemberCard: React.FC<MemberProps> = ({ member }) => (
    <div className="w-52 flex flex-col">
        <div className="relative w-full h-52 mb-3">
            <Image src={member.image} alt={member.name} objectFit="cover" layout="fill" className="rounded-full" />
        </div>
        <h4 className="text-center mb-0">{member.name}</h4>
        {/*<p className="capitalize text-center">{member.department}</p>*/}
    </div>
);
