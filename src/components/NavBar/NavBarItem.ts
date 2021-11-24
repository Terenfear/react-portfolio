/* eslint-disable @typescript-eslint/no-namespace */
export enum NavBarItem {
    Home = 'Home',
    AboutMe = 'About Me',
    HardSkills = 'Hard Skills',
    SoftSkills = 'Soft Skills',
    Experience = 'Experience',
    Contact = 'Contact Me'
}

export namespace NavBarItemUtils {
    export const asArray = (): NavBarItem[] =>
        Object.values(NavBarItem) as NavBarItem[]
}
