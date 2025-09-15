import React from 'react';

const DashboardTitle = ({heading }) => {
    return (
        <div className="text-center my-5 md:my-10 space-y-4 ">
            <h4 className="text-2xl text-[#F85023] border-2 border-[#8770EA] w-1/2 md:w-1/4 mx-auto border-x-transparent">{heading}</h4>
        </div>
    );
};

export default DashboardTitle;