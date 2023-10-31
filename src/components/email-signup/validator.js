export function checkEmail(email){
    let errors = []
    if(email.length === 0){
        errors.push("Email required")
    }

    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && email.length !== 0){
        errors.push("enter a valid email")
    }
    return errors
}