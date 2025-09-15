
const SectionTitle = ({heading, subHeading, description}) => {
    return (
        <div className="text-center my-5 md:my-20 space-y-4 ">
            <h4 className="text-2xl text-[#F85023] border-2 border-[#8770EA] w-2/3 md:w-1/4 mx-auto border-x-transparent">--- {subHeading} ---</h4>
            <h2 className="text-4xl font-bold">{heading}</h2>
            <p className="md:w-1/2 mx-auto text-gray-600">{description}</p>
        </div>
    );
};

export default SectionTitle;