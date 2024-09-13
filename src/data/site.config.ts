interface SiteConfig {
    author: string;
    title: string;
    description: string;
    lang: string;
    ogLocale: string;
    shareMessage: string;
}

export const siteConfig: SiteConfig = {
    author: 'yidev27', // Site author
    title: 'Fullstack Developer', // Site title.
    description:
        'Desarrollador Fullstack, creando mi primera página web en el 2021, Actualmente Freelancer #JavaScript #React. Mcbo Ve', // Description to display in the meta tags
    lang: 'es-VE',
    ogLocale: 'es_VE',
    shareMessage: 'Comparte este mensaje', // Message to share a post on social media
    // Number of posts per page
};
