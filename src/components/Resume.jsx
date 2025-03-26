import React from "react";
import "./resume.css";

export const Resume = () => {
  const resumeImage = "/Shivam_Singh_Resume.png"; // Make sure it's in public folder

  const handleDownload = () => {
    const resumeURL = "/Shivam_Singh_Resume_.pdf"; // Keep original PDF for download
    window.open(resumeURL, "_blank");
  };

  const handleShare = () => {
    const resumeURL = window.location.href;
    navigator.clipboard.writeText(resumeURL);
    alert("Resume link copied to clipboard!");
  };

  return (
    <div className="resume-container">
        <h1>My Resume</h1>
      <img src={resumeImage} alt="My Resume" className="full-resume" />
      <div className="resume-buttons">
        <button onClick={handleDownload} className="btn btn-download">Download</button>
        <button onClick={handleShare} className="btn btn-share">Share</button>
      </div>

      <p className="resume-note">
        * The resume is in PNG format. Click **Download** to open it in a new tab, then you can use links and can download it.
      </p>
    </div>
  );
};










































// import React from "react";
// import "./resume.css";

// export const Resume = () => {
//   const handleDownload = () => {
//     // Replace with your actual resume file path
//     window.open("\Shivam_Singh_Resume_.pdf", "_blank");
//   };

//   const handleShare = () => {
//     const resumeURL = window.location.href;
//     navigator.clipboard.writeText(resumeURL);
//     alert("Resume link copied to clipboard!");
//   };

//   return (
//     <div className="resume-container">
//       <h1>My Resume</h1>
//       <iframe src="\Shivam_Singh_Resume_.pdf" width="100%" height="600px" title="Resume"></iframe>
//       <div className="resume-buttons">
//         <button onClick={handleDownload} className="btn btn-download">Download</button>
//         <button onClick={handleShare} className="btn btn-share">Share</button>
//       </div>
//     </div>
//   );
// };
