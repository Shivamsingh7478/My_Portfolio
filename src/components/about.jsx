import './about.css';
import profileImage from '../assets/images/Screenshot_2025-03-11_002059-removebg-preview.png';

export const About = () => {
    return (
        <div className="About">

            <div className="About-section">
               <p className='intro'><span className='emoji'>✌🏻</span>
                  Hi there, I am <span className='name'>Shivam Singh</span>
               </p> 
                <h1>A 
                    <span className= 'highlight'> Web Devloper. </span>
                    I create and optimize websites and web applications.
                </h1>
                
                <p className='description'>I am a full stack web developer passionate about learning new skills and creating innovative projects that solve real-life problems.
                Currently, I am a 3rd-year B.Tech Computer Science Engineering student at KIIT University in Bhubaneswar, Odisha.</p>
            </div>
            <div className="Image-section">
                <img src={profileImage} alt="profile" />
            </div>
    </div>
    );
    
    
}