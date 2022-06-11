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
    const members = await fetch("localhost:3000/api/members")
    const sessions = await fetch("https://.../sessions")
    const sideprojects = await fetch("https://.../sideprojects")

    return {
        props: {
            members,
            sessions,
            sideprojects
        }
    }
}

export default Stats
