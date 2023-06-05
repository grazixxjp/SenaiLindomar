export default function Somar(props){
    var valorA = parseFloat(props.valorA)
    var valorB = parseFloat(props.valorB)
    var total = valorA + valorB
    if(isNaN(valorA)){valorA=0}
    if(isNaN(valorB)){valorB=0}
    if(valorA==''){valorA=0}
    if(valorB==''){valorB=0}
    var total = valorA + valorB
    return(total)
}