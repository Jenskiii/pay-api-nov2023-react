// name
export function checkName(name){
    let errors = []

    if(name.length === 0){
        errors.push("This field can't be empty")
    }

    if(!name.match(/^[a-z ,.'-]+$/i) && name.length !== 0){
        errors.push("Please use a valid name")
    }

    return errors
}
// email
export function checkEmail(email){
    let errors = []
    if(email.length === 0){
        errors.push("This field can't be empty")
    }

    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && email.length !== 0){
        errors.push("Please use a valid email address")
    }
    return errors
}

export function checkCompany(company){
    let errors = []

    if(company.length === 0){
        errors.push("This field can't be empty")
    }
    if(company.trim().trim().length < 3 && company.length !== 0){
        errors.push("Company name must be longer than 3 characters")
    }
    return errors
}
export function checkTitle(title){
    let errors = []
    if(title.length === 0){
        errors.push("This field can't be empty")
    }

    if(title.trim().trim().length < 5 && title.length !== 0){
        errors.push("Title must be longer than 5 characters")
    }
    return errors
}
export function checkMessage(message){
    let errors = []
    if(message.length === 0){
        errors.push("This field can't be empty")
    }
    if(message.trim().length > 250){
        errors.push("Not more that 250 characters")
    }
    if(message.trim().trim().length <= 25 && message.length !== 0){
        errors.push("Enter more than 25 characters")
    }
    return errors
}






