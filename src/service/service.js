export function MoneyFormat (number, toFixe = 0) {
    return parseFloat(Number(number).toFixed(toFixe)).toLocaleString(undefined, { minimumFractionDigits: toFixe })
}

export function checkImageExists (url) {
    const image = new Image()
    image.src = url
    return image.complete && image.naturalHeight !== 0
}

export function starRating (score) {
    const rating = (score / 2).toFixed(1)
    return parseFloat(rating)
}

export const Wait = ({id = ''}) => {
    return <div id={id} className="absolute left-0 top-0 bottom-0 right-0 flex justify-center items-center z-[100]">
        <div className="circ animation-onload-circ w-[150px] h-[150px] absolute"/>
        <div className="circ animation-onload-circ-rev w-[120px] h-[120px] absolute"/>
        <div className="circ animation-onload-circ w-[90px] h-[90px] absolute"/>
    </div>
}
