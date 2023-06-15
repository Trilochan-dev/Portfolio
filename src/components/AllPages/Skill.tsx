export default function Skill() {
    const skills = [
        { name: "Html", link: "./Images/svg/html.svg" },
        { name: "css", link: "./Images/svg/css.svg" },
        { name: "javascript", link: "./Images/svg/javascript.svg" },
        { name: "react", link: "./Images/svg/react.svg" },
        { name: "next", link: "./Images/svg/nextjs.svg" },
        { name: "redux", link: "./Images/svg/redux.svg" },
        { name: "node js", link: "./Images/svg/nodejs.svg" },
        { name: "express js", link: "./Images/svg/express.svg" },
        { name: "python", link: "./Images/svg/python.svg" },
        { name: "django", link: "./Images/svg/django.svg" },
        { name: "laravel", link: "./Images/svg/laravel.svg" },
        { name: "go lang", link: "./Images/svg/go.svg" },
        { name: "mongodb", link: "./Images/svg/mongodb.svg" },
        { name: "my sql", link: "./Images/svg/mysql.svg" },
        // { name: "postgress", link: "./Images/svg/postgress.svg" },
        { name: "redis", link: "./Images/svg/redis.svg" },
        { name: "tailwind css", link: "./Images/svg/tailwindcss.svg" },
        // { name: "bootstrap css", link: "./Images/svg/bootstrap.svg" },
        { name: "git", link: "./Images/svg/git.svg" },
        { name: "docker", link: "./Images/svg/docker.svg" },
        { name: "graphql", link: "./Images/svg/graphql.svg" },
        { name: "elasticsearch", link: "./Images/svg/elasticsearch.svg" },
        // { name: "cypress", link: "./Images/svg/cypress.svg" },
        { name: "postman", link: "./Images/svg/postman.svg" }
    ]
    return (
        <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-4 col-gap-8 mx-12 my-4">
            {
                skills.map((s, i) => (
                    <div className="relative test aspect-square rounded-lg group bg-primary-light hover:bg-primary-dark flex flex-col gap-2 items-center justify-center shadow-xl uppercase cursor-pointer" key={s.name + i}>
                        <img src={s.link} className='h-[60%] w-[60%] group-hover:hidden' />
                        <p className='absolute text-sm group-hover:text-white group-hover:block hidden'>{s.name}</p>
                    </div>
                ))
            }
        </div>
    )

};
