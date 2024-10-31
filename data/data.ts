const currentYear = new Date().getFullYear();
const data = {
    sitename: "Concentino Motors",
    sitetagline: "Algo grande vem por aí! ✨ 🔥",
    siteurl: "concentinomotors.com.br",
    sitelogo: "",
    title: "Em breve!",
    description: "Estamos trabalhando 👨‍💻 duro para trazer algo especial para você! 🚗✨ Um lugar onde sua experiência em busca do carro dos seus sonhos será incrível. Nossa nova loja de carros está chegando com novidades, uma seleção de veículos impecáveis e uma equipe pronta para te ajudar a fazer a melhor escolha. Prepare-se para se encantar com modelos variados e exclusivos, condições imperdíveis e um atendimento focado em realizar o seu desejo de dirigir o carro ideal. Seja você um apaixonado por SUVs, sedãs, ou carros esportivos, aqui temos o que você procura! Aguarde e venha nos visitar em breve. Você vai adorar essa nova experiência e tudo o que preparamos para você! 😍",
    newsletterheading: "Fique ligado nas novidades que estão por vir!",
    copyrightText: `Concentino Motors © ${currentYear} | Desenvolvido por &nbsp;<a target="_blank" class="no-underline md:underline" href="https://sync.com.br">sync</a>`,
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
