import type { NextPage } from "next"

interface Props {
    members?: string
    sessions?: string
    sideprojects?: string
}

const Stats: NextPage<Props> = ({ members, sessions, sideprojects }) => {
  return (
    <div>
      <h1>{members}+</h1>      
      <h1>{sessions}+</h1>
      <h1>{sideprojects}+</h1>
    </div>
  )
}

export async function getServerSideProps() {
    const members = await fetch("https://community-landing-page-clone.vercel.app/api/members")
    const sessions = await fetch("https://community-landing-page-clone.vercel.app/sessions")
    const sideprojects = await fetch("https://community-landing-page-clone.vercel.app/sideprojects")

    return {
        props: {
            members,
            sessions,
            sideprojects
        }
    }
}

export default Stats
