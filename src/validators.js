export const requiredField = value => {
    return value ?  undefined :  "Field is required"
}


export const maxLength = (length) => (value)=>{
    return  value.length < length ? undefined  : `Length must be less then ${length} symbols`
}
