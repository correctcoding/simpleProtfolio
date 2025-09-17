export const projectsInfo = [
    {
        featured: true,
        link: "featured/project/ecotrack",
        uiImage: "/banner-ecotrack.png",
        type: "Mobile App",
        title: "EcoTrack",
        dsc: "A mobile app designed to help users track their carbon footprint and make sustainable choices.",
    },
    {
        featured: true,
        link: "featured/project/healthhub",
        uiImage: "/banner-HealthHub.png",
        type: "Web Design",
        title: "HealthHub",
        dsc: "A web platform providing health and wellness resources, including articles, videos, and community forums.",
    },
    {
        featured: true,
        link: "featured/project/educonnect",
        uiImage: "/banner-EduConnect.png",
        type: "UI/UX Design",
        title: "EduConnect",
        dsc: "A user interface and experience design for an educational platform connecting students and tutors.",
    },
]

export const contactFormData = [
    {
        label: "Your Name",
        placeholder: "What should i call you?",
        type: "input",
        name: "name"
    },
    {
        label: "Your Email",
        placeholder: "Where can i reach you?",
        type: "input",
        name: "email"
    },
    {
        label: "Your Message",
        placeholder: "Tell me about your project?",
        type: "textarea",
        name: "message"
    },
]


export const typeConfirmer = (formItem, changesData, formData) => {
    switch (formItem.type) {
        case "input":
            return (
                <label className="flex flex-col mb-3" htmlFor={formItem.name}>
                    <span>{formItem.label}</span>
                    <input
                        onChange={changesData}
                        type="text"
                        id={formItem.name}
                        name={formItem.name}
                        value={formData[formItem.name]}
                        placeholder={formItem.placeholder}
                        className="w-full flex-1 rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111418] focus:ring-primary border border-[#3b4754] bg-[#1c2127] placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                    />
                </label>
            )

        case "textarea":
            return (
                <label className="flex flex-col mb-3" htmlFor={formItem.name}>
                    <span>{formItem.label}</span>
                    <textarea
                        onChange={changesData}
                        id={formItem.name}
                        name={formItem.name}
                        value={formData[formItem.name]}
                        placeholder={formItem.placeholder}
                        className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111418] focus:ring-primary border border-[#3b4754] bg-[#1c2127] min-h-36 placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                    />
                </label>
            )

        default:
            return null
    }
}