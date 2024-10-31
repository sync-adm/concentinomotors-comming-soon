const currentYear = new Date().getFullYear();
const data = {
    sitename: "Concentino Motors",
    sitetagline: "Algo grande vem por aí! ✨ 🔥",
    siteurl: "concentinomotors.com.br",
    sitelogo: "",
    title: "Em breve!",
    description: "Estamos trabalhando 👨‍💻 duro pra traze algo especial a você. Você irá  amar😍!",
    newsletterheading: "Fique ligado nas novidades que estão por vir!",
    copyrightText: `Concentino Motors © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://sync.com.br">sync</a>`,
    socialIconsHeading: "Siga-nos 📣",
    hideSubscribeForm: true, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/sandeep.baikare/",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/BaikareSandeep",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/in/sandip-baikare/",
        },
    ],
    hide :{
        subscribeForm: true, // make true to disable subscription form         
        header: true,
        content: false,
        footer: false,
    }
}

export default data;
