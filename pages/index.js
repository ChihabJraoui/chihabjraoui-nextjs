import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import {getAllPostsForHome} from '@/lib/api'
import Head from 'next/head'
import {CMS_NAME} from '@/lib/constants'

export async function getStaticProps({preview = null})
{
    const allPosts = (await getAllPostsForHome(preview)) || []

    console.log(preview)

    return {
        props: {allPosts, preview},
    }
}

export default function Index({allPosts, preview})
{
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)

    return (
        <Layout preview={preview}>
            <Head>
                <title>Next.js Blog Example with {CMS_NAME}</title>
            </Head>
            <Container>
                <Intro/>
                {heroPost && (
                    <HeroPost
                        title={heroPost.attributes.title}
                        coverImage={heroPost.attributes.coverImage}
                        date={heroPost.attributes.date}
                        author={heroPost.attributes.author}
                        slug={heroPost.attributes.slug}
                        excerpt={heroPost.attributes.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
            </Container>
        </Layout>
    )
}
