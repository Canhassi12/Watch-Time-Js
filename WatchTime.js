let hour = Number(prompt('write hour'))
let minute = Number(prompt('write minute'))
let second = Number(prompt('write second'))

if(second === 59 && minute < 59) 
{
    alert (`${hour}:${minute + 1}:${second = '00'}`)
}
else if(minute === 59 && second === 59) 
{
    alert (`${hour + 1}:${minute = "00"}:${second = '00'}`)
}
else if(minute === 59 && second < 59)
{
    alert (`${hour + 1}:${minute = "00"}:${second}`)
}
else if(hour === 23 && minute === 59 && second === 59)
{
    alert (`${hour = 24}:${minute = "00"}:${second = 0}`)
}
else
{
    alert (`${hour}:${minute}:${second + 1}`)
}