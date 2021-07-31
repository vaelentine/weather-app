const getDateFromEpoch: any = (epoch_time:number ) => {
    const date = new Date(Number(epoch_time+'000')) 
    return date.toString();
} 

export default getDateFromEpoch;
