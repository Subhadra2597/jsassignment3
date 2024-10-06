let forms= document.getElementById("btn")
forms.addEventListener("submit",(event)=>{handleForm(event)})

function handleForm(e)
{
    

    e.preventDefault()
    let marks= document.getElementById("marks").value
    if (marks>100 ||marks<0)
        {
        alert("invalid marks")
        console.log("submitted")
       
       }
    else if(marks>=90 && marks<=100)
        {
        alert("Passed\nYour Grade:A+")}
    else if(marks>=80 && marks<=89)
        {
        alert("Passed\nYour Grade:A")}
    else if(marks>=70 && marks<=79)
        {
        alert("Passed\nYour Grade:B+")}
    else if(marks>=60 && marks<=69)
        {
        alert("Passed\nYour Grade:B")}
    else if(marks>=50 && marks<=59)
        {
        alert("Passed\nYour Grade:C+")}
    else if(marks>=40 && marks<=49)
        {
        alert("Passed\nYour Grade:C")}
    else if(marks>=30 && marks<=39)
        {
        alert("Passed\nYour Grade:D+")}
    else if(marks>=20 && marks<=29)
        {
        alert("Failed\nYour Grade:D")}
    else if(marks<20)
        {
        alert("Failed\nYour Grade:E")}
    }