export const brandonsResumeConfig = {
    name: 'Brandon J. Irving',
    jobTitle: 'Lead Software Engineer',
    description: 'Lead software engineer with 3 years professional experience, consistently finding reliable solutions for any problem handed. An expert in javascript, best web design practice and SDLC, eagerly ready to take on any task',
    email: 'BirvingFau@gmail.com',
    address: '618 NW 13th ST BOCA RATON FL',
    phoneNumber: '(954) 554-8848',
    experiences: [
        {
            position: 'Full Stack Developer',
            date: '0000 - 0000',
            isPresent: false,
            jobCompany: 'PeakActivity',
            jobLocation: 'Boytnon Beach',
            jobDuties: [
                'Developed user-facing features using React.js',
                'Built reusable components and front-end libraries',
                'Translate designs, wireframes or a customers vision into quality code',
                'Build backends (Node Js), that handles REST',
                'Optimize performance and decrease of load speed',
                'Create unit tests (Using Jest and Enzyme)'
            ]
        },
        {
            position: 'Lead Software Engineer',
            date: '0000 - 0000',
            isPresent: false,
            jobCompany: 'PeakActivity',
            jobLocation: 'Boytnon Beach',
            jobDuties: [
                'Plan and architect enterprise level software using React Js and Node js',
                'Performed Code reviews',
                'Designed sites to be compatible with top browsers, including Firefox, Chrome and Safari',
                'Create Git project and maintain upkeep of the source control client',
                'Lead small team in web app development, following best agile methodology practice',
                'Counsel client on best practice, app direction and technologies that should be used',
                'Analyzed and debugged complex critical issues'
            ]
        },
    ],
    // list = { isLink: bool, name, url }
    //         const { title, list } = extra
    extras: [
        {
            title: 'Portfolio',
            list: [
                { isLink: true, url: 'https://github.com/brandon-irving', name: 'Brandon Irving - Github Account' },
                { isLink: true, url: 'https://brandon-irving.github.io/portfolio', name: 'Online Portfolio / React Js (using context for state management and styled components for theming)' },
            ],

        },
        {
            title: 'Sample Works',
            list: [
                { isLink: true, url: 'https://Youfit.com', name: 'Youfit.com (React Js/Gatsby)' },
                { isLink: true, url: 'https://Cityfurniture.com', name: 'Cityfurniture.com (Next Js - serverside rendering, node js backend)' },
                { isLink: true, url: 'https://brandon-irving.github.io/irving-family-feud', name: 'Family Feud (React Js using context for state management)' },
                { isLink: true, url: 'https://brandon-irving.github.io/hooks-library', name: 'Hooks Library! (Library of hooks using Reacts context API that I created)' },


            ],

        },
        {
            title: 'Skills',
            list: [
                { name: 'Advanced Javascript' },
                { name: 'Typescript' },
                { name: 'React JS (Strong understanding of core principles)' },
                { name: 'HTML5, CSS (SASS), Jquery' },
                { name: 'Redux' },
                { name: 'Context API' },
                { name: 'REST API' },
                { name: 'Immutable Js' },
                { name: 'Jest/Enzyme' },
                { name: 'Agile Methodologies' },
                { name: 'Jira/BitBucket' },
                { name: 'Git (Source control)' },
                { name: 'GraphQl' },
                { name: 'API design knowledge' },
                { name: 'Quality processes' },
                { name: 'Website optimization' },
                { name: 'Design patterns and principles' },
                { name: 'Agile workflow processes' },
                { name: 'Software best practices' },
                { name: 'Web user interfaces' },
                { name: 'Web Development' }
            ],

        }
    ],
    education: [
        {
            name: 'Florida Atlantic University',
            degree: 'B.S: Computer Science - Software Engineering',
            location: 'Boca Raton',
            gradDate: '2018-04'
        }
    ]

}