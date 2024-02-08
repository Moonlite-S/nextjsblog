import { prisma } from "@/lib/prisma"

async function main() {
    const blog = await prisma.blogPost.upsert({
        where: { id: "1" },
        update: {},
        create: {
            title: 'My first blog',
            body: 'This is my first blog post',
            picture: 'https://example.com/blog-post-1',
            blogCreated: new Date().toLocaleDateString()
        },
    }
    )
    console.log({ blog })
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})