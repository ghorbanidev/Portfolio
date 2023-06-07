
import { devSkills } from '../../constants/skills';
import Skill from './Skill';
import { useState, useEffect } from 'react';


const Skills = () => {

    const [javaScript, setJavaScript] = useState(0)
    const [html, setHtml] = useState(0)
    const [css, setCss] = useState(0)
    const [nodeJs, setNodeJs] = useState(0)
    const [reactJs, setReactJs] = useState(0)
    const [git, setGit] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setJavaScript(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 82)
            })

            setHtml(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 95)
            })

            setCss(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 73)
            })

            setReactJs(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 95)
            })

            setNodeJs(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 87)
            })

            setGit(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 66)
            })

        }, 100)

        return () => {
            clearInterval(timer)
        }

    }, [])

    const { htmlSkill, cssSkill, gitSkill, jsSkill, nodeSkill, reactSkill } = devSkills


    return (
        <>
            <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html} />
            <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css} />
            <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={javaScript} />
            <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git} />
            <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={nodeJs} />
            <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={reactJs} />
        </>
    )
}

export default Skills;