import React from 'react';

export const Footer: React.FC = () => (
    <div className="fixed w-full bottom-0 backdrop-blur-lg border-t-2 border-t-slate-500/10 py-5 px-60 z-50">
        <div className="flex items-center text-slate-300 text-sm">
            <p>&copy; 1998-2022 TechKnights</p>
            <p className="ml-auto">
                Website by <a href="https://romashov.dev" target="_blank" rel="noreferrer">Michael Romashov</a>
            </p>
        </div>
    </div>
);
