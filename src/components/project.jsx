import './project.css';

export const Project = () => {
    return (<div>
         <h1 className="heading">Projects</h1>

         <div className='project-card'>
                <div className='project-image'>
                    <img src="" alt="" />
                </div>

                <div className='project-info'>
                    <h2 className='project-title'>WEB3 Wallet</h2>
                    <p className='project-description'>
                    Engineered a secure web-based wallet supporting 5+ unique public keys, enabling efficient multi-wallet management
 and greater flexibility for users.
 • Developed robust wallet creation and management features using JavaScript and encryption libraries, achieving
 95% transaction security and safeguarding user assets.
 • Enhanced user interface responsiveness by 20%, leading to an overall improved, seamless experience on both
 desktop and mobile platforms.
                    </p>

                    <div className='project-btn'>
                        <a href="" className='btn btn-primary'>
                        GitHub Repository - Frontend
                        </a>
                        <a href="" className='btn btn-primary'>
                        GitHub Repository - Backend
                        </a>
                    </div>
                </div>
         </div>



         <div className='project-card'>
                <div className='project-image'>
                    <img src="" alt="" />
                </div>

                <div className='project-info'>
                    <h2 className='project-title'>Web Portal</h2>
                    <p className='project-description'>
                    Built an efficient portal that streamlined regulatory registrations for over 20 AYUSH startups, reducing processing
 time by 30% through automation and better data management practices.
 • Developed user-friendly, interactive forms that assisted startups in navigating sector-specific regulations; reduced
 submission errors by 30% while maintaining compliance with all applicable regulatory frameworks and guidelines.
 • Optimized performance, cutting registration time by 40% and boosting user satisfaction.
                    </p>

                    <div className='project-btn'>
                        <a href="" className='btn btn-primary'>
                        GitHub Repository - Frontend
                        </a>
                        <a href="" className='btn btn-primary'>
                        GitHub Repository - Backend
                        </a>
                    </div>
                </div>
         </div>
    </div>
    );
}