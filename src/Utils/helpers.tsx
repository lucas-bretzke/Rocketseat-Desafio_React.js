const filterDesc = (desc: string) => {
    return desc.length < 27 ? desc : `${desc.substring(0, 23)}...`
}

const formattedMoney = (value: number) => (value / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});


export { filterDesc, formattedMoney }