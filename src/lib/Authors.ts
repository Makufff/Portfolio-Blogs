export const Authors = [
    {
        id: 1,
        name: "Tanapat Chamted",
        nickname: "PP",
        email: "Makufff.tanapat@gmail.com",
        description: "Just a boy trying to build amazing websites and products for Businesses",
        role: "Developer",
        skills: ["Web Developer" ,],
        profile: "https://img2.pic.in.th/pic/IMG_5664.png",
        links: {
            github: "https://github.com/Makufff",
            instagram: "https://www.instagram.com/_.makufff.js/",
        }
    },
    {
        id: 2,
        name: "Makufff (Pseudonym)",
        nickname: "Makufff",
        role: "Writer",
        email: "Makufff.tanapat@gmail.com",
        profile: "https://img5.pic.in.th/file/secure-sv1/Husky--hacker-c60f2590-0631-4009-8916-1495901e33636e3561383bb36a6e.png",
        links: {
            github: "https://github.com/Makufff",
            instagram: "https://www.instagram.com/_.makufff.js/",
        }
    }
]


export const getAuthors = () => {
    return Authors
}
export const getAuthorsByName = (name: string) => {
    return Authors.filter(author => author.nickname === name)[0]
}
export const getAuthorsById = (id: number) => {
    return Authors.filter(author => author.id === id)[0]
}
export const getAuthorsByNickname = (nickname: string) => {
    return Authors.filter(author => author.nickname === nickname)[0]
}
export const getSkills = (name: string) => {
    return Authors.filter(author => author.nickname === name)[0].skills
}

