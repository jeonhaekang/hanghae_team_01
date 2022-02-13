export const emailCheck = (email) => {
    let _reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    return _reg.test(email);
}

export const pwdCheck = (passward) => {
    let _reg = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#]).*$/

    return _reg.test(passward);
}