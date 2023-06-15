export default function Skills() {
    const skills = [
        {
            key: "Frontend Development",
            value: [
                { name: "Html", link: "./Images/svg/html.svg" },
                { name: "css", link: "./Images/svg/css.svg" },
                { name: "javascript", link: "./Images/svg/javascript.svg" },
                { name: "react", link: "./Images/svg/react.svg" },
                { name: "next", link: "./Images/svg/nextjs.svg" },
                { name: "redux", link: "./Images/svg/redux.svg" },
                { name: "tailwind css", link: "./Images/svg/tailwindcss.svg" },
            ]
        },
        {
            key: "Backend Development",
            value: [
                { name: "node js", link: "./Images/svg/nodejs.svg" },
                { name: "express js", link: "./Images/svg/express.svg" },
                { name: "python", link: "./Images/svg/python.svg" },
                { name: "django", link: "./Images/svg/django.svg" },
                { name: "laravel", link: "./Images/svg/laravel.svg" },
                { name: "go lang", link: "./Images/svg/go.svg" },
            ]
        },
        {
            key: "Database Management",
            value: [
                { name: "mongodb", link: "./Images/svg/mongodb.svg" },
                { name: "my sql", link: "./Images/svg/mysql.svg" },
                { name: "postgress", link: "./Images/svg/postgress.svg" },
            ]
        },
        {
            key: "Tools and Technologies",
            value: [
                { name: "redis", link: "./Images/svg/redis.svg" },
                { name: "git", link: "./Images/svg/git.svg" },
                { name: "docker", link: "./Images/svg/docker.svg" },
                { name: "graphql", link: "./Images/svg/graphql.svg" },
                { name: "elasticsearch", link: "./Images/svg/elasticsearch.svg" },
                { name: "cypress", link: "./Images/svg/cypress.svg" },
                { name: "Looker", link: "./Images/svg/looker.svg" },
                { name: "Pusher", link: "./Images/svg/pusher.svg" },
                { name: "Salesforce", link: "./Images/svg/salesforce.svg" },
                { name: "postman", link: "./Images/svg/postman.svg" },
                { name: "Ubuntu", link: "./Images/svg/ubuntu.svg" },
                { name: "Vs Code", link: "./Images/svg/vscode.svg" },
            ]
        },

    ]

    return (
        <div className="grid grid-cols-1 gap-4 px-20 m-auto h-screen pb-24 pt-16 bg-primary-light overflow-y-auto mb-8">
            {
                skills.map((sdata) => (
                    <>
                        <div className="">
                            <p className="font-bold text-cyan-600 text-xl">{sdata.key}</p>
                            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 xlg:grid-cols-13 gap-4 py-4">
                                {sdata.value.map((svalue, i) => (
                                    <div className="relative test aspect-square rounded-lg group bg-primary-light hover:bg-primary-dark flex flex-col gap-2 items-center justify-center shadow-xl shadow-[#8e8e8e] uppercase cursor-pointer" key={svalue.name + i}>
                                        <img src={svalue.link} className='h-[60%] w-[60%] group-hover:hidden' />
                                        <p className='absolute text-sm group-hover:text-white group-hover:block hidden'>{svalue.name}</p>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </>


                ))
            }
        </div>
    )

};
