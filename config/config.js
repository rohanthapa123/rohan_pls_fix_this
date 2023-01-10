const Config ={
    ENVIROMENT: "dev",
    SMTP : {
        HOST: "smtp.mailtrap.io",
        PORT: 465,  // 587
        USER: "26beb3b204f396",
        PASS: "c425bf04f8d3c9",
        FROM: "noreply@test.com",
        TLS: false //secure
    },
    DB:{
        PROTOCOL: "mongodb",
        HOST: "127.0.0.1",
        NAME: "mern-stack",
        USER: "",
        PWD: "",
        PORT: 27017
    }
}

module.exports = Config;