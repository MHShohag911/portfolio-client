import BannerImage from '../../../src/assets/img/about-banner.png'
const AboutBanner = () => {
    return (
        <div className='relative'>
            <div className=''>
                <img className='opacity-90' src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default AboutBanner;