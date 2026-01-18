import { FaCode, FaLaptopCode, FaRocket, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  const skills = [
    'C Programming', 'C++', 'Data Structures', 'Python', 'JavaScript', 'React', 
    'Node.js', 'HTML/CSS', 'TailwindCSS', 'MongoDB', 'Express.js', 'Operating Systems',
    'Web Technologies', 'IT Systems', 'Git', 'WebRTC', 'Socket.io'
  ]

  const experiences = [
    {
      title: 'Lecturer I.T. & Full Stack Developer',
      company: 'Technical Education',
      period: 'Present',
      description: 'Teaching Information Technology subjects including Computer Programming, Data Structures, Operating Systems, Web Technologies, and Scripting Languages. Simultaneously working as a Full Stack Developer, building modern web applications and authoring technical books for students.'
    },
    {
      title: 'Author & Technical Writer',
      company: 'Bharat Bharati Prakashan & Co.',
      period: 'Ongoing',
      description: 'Author of multiple technical books covering C Programming, Data Structures, Python, Operating Systems, Web Technologies, and IT Systems. Books are approved by Technical Education Council, Uttar Pradesh and based on NEP 2020 and AICTE revised syllabus.'
    }
  ]

  return (
    <div className="py-12 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-300">
            Teaching technology and building innovative solutions and sharing knowledge and experiences with everyone
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-md p-8 mb-8 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <img 
              src="/img/lalit_pic.jpg" 
              alt="Lalit Kumar Gupta" 
              className="w-32 h-32 rounded-full object-cover border-4 border-primary-500"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">Lalit Kumar Gupta</h2>
              <p className="text-primary-400 text-lg mb-4">Lecturer I.T. & Full Stack Developer</p>
              <p className="text-gray-300 text-justify">
                As a Lecturer in Information Technology and a Full Stack Developer, I combine my passion for teaching with hands-on development expertise. I specialize in modern web technologies and enjoy building applications that solve real-world problems. Through my role as an educator, I share knowledge with students, and as a developer, I create innovative solutions. I have authored several technical books and continue to contribute to the field through both teaching and development.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <FaCode className="text-primary-400 text-2xl mr-3" />
              <h3 className="text-xl font-bold text-white">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <FaRocket className="text-primary-400 text-2xl mr-3" />
              <h3 className="text-xl font-bold text-white">Interests</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Teaching & Education</li>
              <li>• Full Stack Web Development</li>
              <li>• Technical Writing & Book Authoring</li>
              <li>• Programming & Software Development</li>
              <li>• Mentoring Students</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-md p-8 mb-8 border border-gray-800">
          <div className="flex items-center mb-6">
            <FaLaptopCode className="text-primary-400 text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-4">
                <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                <p className="text-primary-400 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-300 text-justify">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-md p-8 border border-gray-800">
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-primary-400 text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-white">Master of Technology</h4>
              <p className="text-primary-400">Computer Science</p>
              <p className="text-gray-400 text-sm">2010 - 2012</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

