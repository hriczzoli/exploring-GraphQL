import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: 'ep%~gbY79>RXf>z&',
    fragmentReplacements
})

export { prisma as default }


// const createPostForUser = async (authorId, data) => {
//     const userExists = await prisma.exists.User({ id: authorId })

//     if (!userExists) {
//         throw new Error('User does not exist.')
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ author { id name email posts { id title published } } }')
//     return post.author
// }

// // createPostForUser('cjz4htt8i00830946djkmycb3', {
// //     title: "Great books to read",
// //     body: "The War of Art",
// //     published: true
// // }).then((user) => {
// //     console.log(JSON.stringify(user, undefined, 2))
// // }).catch((error) => {
// //     console.log(error.message)
// // })


// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({ id: postId })

//     if (!postExists) {
//         throw new Error('Post not found')
//     }

//     const post = await prisma.mutation.updatePost({
//         data: {
//             ...data
//         },
//         where: {
//             id: postId
//         }
//     }, '{ author { id name email posts { id title published } } }')
//     return post.author
// }

// // updatePostForUser('cjz4hjnrt00270946i2bfkh6w', {
// //     published: true
// // }).then((data) => {
// //     console.log(JSON.stringify(data, undefined, 2))
// // }).catch((error) => {
// //     console.log(error.message)
// // })

