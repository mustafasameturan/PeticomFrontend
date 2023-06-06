//Checkbox css'ini kontrol eden fonksiyon
export const handleCheckbox = (status) => {
    if (status) {
        return 'bg-green border border-green text-white'
    } else {
        return 'border border-black'
    }
}